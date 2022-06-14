import { DatePipe, ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';

export interface roomType {
  value: string;
  viewValue: string;
}
export interface bedType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-bidding-page',
  templateUrl: './bidding-page.component.html',
  styleUrls: ['./bidding-page.component.scss']
})
export class BiddingPageComponent implements OnInit {
  city: any[] = [];
  userDetails: any;
  ELEMENT_DATA: any[] = [];
  indexList: any;

  dataSource = new MatTableDataSource();
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  roomTypes: roomType[] = [
    { value: 'AC', viewValue: 'AC' },
    { value: 'NON-AC', viewValue: 'NON-AC' },

  ];
  bedTypes: bedType[] = [
    { value: 'Single', viewValue: 'Single' },
    { value: 'Double', viewValue: 'Double' },

  ];
  registerForm = new FormGroup({
    // email_id: new FormControl('', Validators.required),
    cust_check_in: new FormControl('', [Validators.required]),
    cust_check_out: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    userAddress: new FormControl('', [Validators.required]),
    roomNeed: new FormControl('', [Validators.required]),
    guestNo: new FormControl('', [Validators.required]),
    bedType: new FormControl('', [Validators.required]),
    roomType: new FormControl('', [Validators.required]),
    userBidAmount: new FormControl('', [Validators.required]),
  });


  displayedColumns = ['Id', 'hoteName', 'address', 'offeringAmount', 'yourAmount', 'Operation'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private scroller: ViewportScroller, public commonService: CommonHttpService, public route: Router, private datepipe: DatePipe, private httpService: CommonHttpService) { // for scroll page to top
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    window.scrollTo({
      top: 0,
    });
    //scroll

    // for AOS animation
    AOS.init({
      delay: 0,
      // once: true,
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
    });
  }

  goDown() {
    this.scroller.scrollToAnchor("targetHotel");
  };
  login() {
  }


  /**
  * getAllCities() function to get a cities
  * @param id 
  * @author Virendra kadam
  */
  getAllCities() {
    this.httpService.getSecure(environment.getAllCities).subscribe((data) => {
      console.log(data);
      this.city = data.result
    });
  }
  /**
* insertBidDetails() function to insert hotel details
* @param id 
* @author Virendra kadam
*/

  submit(data: any) {
    if (this.registerForm.valid) {
      data.cust_check_in = this.datepipe.transform(data.cust_check_in, 'yyyy-MM-dd');
      data.cust_check_out = this.datepipe.transform(data.cust_check_out, 'yyyy-MM-dd');
      const payload = {
        formValue: this.registerForm.value,
        userId: this.userDetails.userId
      }
      
      this.commonService.postSecure(environment.insertUserBidDetails, payload).subscribe(res => {
        if (!res.error) {
          alert('Record Inserted Successfully!!!');
          this.registerForm.reset();
        } else {
          alert('Error Occurred!!!')
        }
      })
    } else {
      alert('Please insert all fields!!!')
    }
  }
  editCustomer() {
  }
  deleteRoom(element: any) {
  }
  ngOnInit(): void {
    this.getAllCities();
    this.userDetails = this.commonService.getUser();
    this.userDetails = JSON.parse(this.userDetails)
    console.log(this.userDetails);
    if (this.userDetails === null) {
      this.route.navigate(["/userLogin"]);
    }
  }
}

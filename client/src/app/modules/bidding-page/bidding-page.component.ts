import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    password: new FormControl('', [Validators.required]),
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
  constructor(private scroller: ViewportScroller, public commonService: CommonHttpService, public route: Router, private httpService: CommonHttpService) { // for scroll page to top
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

submit() {
  if (this.registerForm.valid) {
    this.commonService.postSecure(environment.insertUserBidDetails, this.registerForm.value).subscribe(res => {
      if (!res.error) {
        alert('Record Inserted Successfully!!!');
        this.registerForm.reset();
        this.route.navigate(["/userLogin"]);
      } else {
        alert('Error Occurred!!!')
      }
    })
  } else {
    alert('Please insert all fields!!!')
  }
}
  ngOnInit(): void {
    this.getAllCities();
  }
}

import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-hotel-registration-page',
  templateUrl: './hotel-registration-page.component.html',
  styleUrls: ['./hotel-registration-page.component.scss']
})
export class HotelRegistrationPageComponent implements OnInit {
  city: any[] = [];
  genders: Gender[] = [
    { value: '1', viewValue: 'Male' },
    { value: '2', viewValue: 'Female' },
  ];
  registerForm = new FormGroup({
    hotelName: new FormControl('', [Validators.required]),
    hotelAddress: new FormControl('', [Validators.required]),
    hotelEmail: new FormControl('', [Validators.required, Validators.email]),
    hotelContactNumber: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    // email_id: new FormControl('', Validators.required),
    hotelPassword: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
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

  onFileChange(event:any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.registerForm.patchValue({
          fileSource: reader.result
        });
      };
    }

  }
  getAllHotelDetails() {
    this.httpService.getSecure(environment.getAllHotelDetails).subscribe((data) => {
      console.log(data);
    });
  }

  /**
* getAllCities() function to get all cities
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
* insertHotelDetails() function to insert hotel details
* @param id 
* @author Virendra kadam
*/

  singUp() {
    if (this.registerForm.valid) {
      this.commonService.postSecure(environment.insertHotelDetails, this.registerForm.value).subscribe(res => {
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
    this.getAllHotelDetails();
    this.getAllCities();
  }
}

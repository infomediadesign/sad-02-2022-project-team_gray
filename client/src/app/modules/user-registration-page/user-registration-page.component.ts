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
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.scss']
})
export class UserRegistrationPageComponent implements OnInit {
  genders: Gender[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];
  registerForm = new FormGroup({
    userFirstName: new FormControl('', [Validators.required]),
    userLastName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userContactNumber: new FormControl('', [Validators.required]),
    userGender: new FormControl('', [Validators.required]),
    // email_id: new FormControl('', Validators.required),
    userPassword: new FormControl('', [Validators.required])
  });
  constructor(private scroller: ViewportScroller, public commonService: CommonHttpService, public route: Router, private httpService: CommonHttpService) {
    // for scroll page to top
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

  /**
* getAllUserDetails() function to get all user details
* @param id 
* @author Virendra kadam
*/

  getAllUserDetails() {
    this.httpService.getSecure(environment.getAllUserDetails).subscribe((data) => {
      console.log(data);
    });
  }

/**
* insertUserDetails() function to insert user details
* @param id 
* @author Virendra kadam
*/
  singUp() {
    if (this.registerForm.valid) {
      this.commonService.postSecure(environment.insertUserDetails, this.registerForm.value).subscribe(res => {
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
    this.getAllUserDetails();
  }
}

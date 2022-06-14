import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hotel-login-page',
  templateUrl: './hotel-login-page.component.html',
  styleUrls: ['./hotel-login-page.component.scss']
})
export class HotelLoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    hotelEmail: new FormControl('', [Validators.required, Validators.email]),
    // email_id: new FormControl('', Validators.required),
    hotelPassword: new FormControl('', [Validators.required])
  });
  constructor(private scroller: ViewportScroller, private router: Router, private commonService: CommonHttpService) {
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
  
    /**
* This function represent hotel Login
* @param {*} req 
* @param {*} res 
* @author Virendra Kadam
*/
login() {
  if (this.loginForm.valid) {
    this.commonService.postSecure(environment.hotelLogin, this.loginForm.value).subscribe(res => {
      if (!res.error) {
        localStorage.setItem('hotelId', res.result.hotelId);
        this.commonService.setUser(res.result);
        this.router.navigate(['bidding/']);
      } else {
        alert('Invalid Credentials!!!')
      }
    })
  } else {
    alert('Please insert all fields!!!')
  }
}
  ngOnInit(): void { }
}

import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    // email_id: new FormControl('', Validators.required),
    userPassword: new FormControl('', [Validators.required])
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
  goDown() {
    this.scroller.scrollToAnchor("targetHotel");
  };

  /**
* This function represent User Login
* @param {*} req 
* @param {*} res 
* @author Virendra Kadam
*/
  login() {
    if (this.loginForm.valid) {
      this.commonService.postSecure(environment.userLogin, this.loginForm.value).subscribe(res => {
        if (!res.error) {
          localStorage.setItem('userId', res.userId);
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

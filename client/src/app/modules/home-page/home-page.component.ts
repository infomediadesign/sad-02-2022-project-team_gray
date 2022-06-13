import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ViewportScroller } from "@angular/common";
import { CommonHttpService } from 'src/app/services/common-http.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private scroller: ViewportScroller, public commonService: CommonHttpService, public route: Router, private httpService: CommonHttpService) {
    // for scroll page to top
    window.scrollTo({
      top: 0,
    });

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
* getAllHotels() function to get all cities
* @param id 
* @author Virendra kadam
*/
  getAllHotelDetails() {
    this.httpService.getSecure(environment.getAllHotelDetails).subscribe((data) => {
      console.log(data)
    });
  }

  ngOnInit(): void {
    this.getAllHotelDetails();
  }

}

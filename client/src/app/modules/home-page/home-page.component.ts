import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { 
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
ngOnInit(): void {}
}

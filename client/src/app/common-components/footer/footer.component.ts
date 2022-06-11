import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // toggle() {
  //   var nav = document.querySelector(".nav");
  //   nav.classList.toggle("active");
  // }
//   scrollTo():void {
//     setTimeout(()=>{
//   document.querySelector('#services').scrollIntoView({ behavior: 'smooth'});
// },1000)
// }
}

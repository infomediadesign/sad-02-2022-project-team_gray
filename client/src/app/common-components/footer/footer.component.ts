import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpService } from 'src/app/services/common-http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonHttpService) { }

  ngOnInit(): void {
  }
  logout(){
    this.commonService.removeUser();
    this.router.navigate(['home/']);
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

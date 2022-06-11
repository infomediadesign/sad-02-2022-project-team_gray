import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiddingPageComponent } from './modules/bidding-page/bidding-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HotelLoginPageComponent } from './modules/hotel-login-page/hotel-login-page.component';
import { HotelRegistrationPageComponent } from './modules/hotel-registration-page/hotel-registration-page.component';
import { UserLoginPageComponent } from './modules/user-login-page/user-login-page.component';
import { UserRegistrationPageComponent } from './modules/user-registration-page/user-registration-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: "userLogin",
    component: UserLoginPageComponent
  },
  {
    path: "hotelLogin",
    component: HotelLoginPageComponent
  },
  {
    path: "userRegister",
    component: UserRegistrationPageComponent
  },
  {
    path: "hotelRegister",
    component: HotelRegistrationPageComponent
  },
  {
    path: "bidding",
    component: BiddingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

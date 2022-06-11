import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { UserLoginPageComponent } from './modules/user-login-page/user-login-page.component';
import { HotelLoginPageComponent } from './modules/hotel-login-page/hotel-login-page.component';
import { HotelRegistrationPageComponent } from './modules/hotel-registration-page/hotel-registration-page.component';
import { UserRegistrationPageComponent } from './modules/user-registration-page/user-registration-page.component';
import { BiddingPageComponent } from './modules/bidding-page/bidding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    UserLoginPageComponent,
    HotelLoginPageComponent,
    HotelRegistrationPageComponent,
    UserRegistrationPageComponent,
    BiddingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelLoginPageComponent } from './hotel-login-page.component';

describe('HotelLoginPageComponent', () => {
  let component: HotelLoginPageComponent;
  let fixture: ComponentFixture<HotelLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordToOtpComponent } from './forgetpassword-to-otp.component';

describe('ForgetpasswordToOtpComponent', () => {
  let component: ForgetpasswordToOtpComponent;
  let fixture: ComponentFixture<ForgetpasswordToOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpasswordToOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordToOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

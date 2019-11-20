import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpassotpComponent } from './forgotpassotp.component';

describe('ForgotpassotpComponent', () => {
  let component: ForgotpassotpComponent;
  let fixture: ComponentFixture<ForgotpassotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpassotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpassotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterpaymentsuccessComponent } from './afterpaymentsuccess.component';

describe('AfterpaymentsuccessComponent', () => {
  let component: AfterpaymentsuccessComponent;
  let fixture: ComponentFixture<AfterpaymentsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterpaymentsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterpaymentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

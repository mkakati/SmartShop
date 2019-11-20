import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankconfirmationComponent } from './bankconfirmation.component';

describe('BankconfirmationComponent', () => {
  let component: BankconfirmationComponent;
  let fixture: ComponentFixture<BankconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcontactComponent } from './bankcontact.component';

describe('BankcontactComponent', () => {
  let component: BankcontactComponent;
  let fixture: ComponentFixture<BankcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

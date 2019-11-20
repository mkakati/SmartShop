import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerpaymentComponent } from './sellerpayment.component';

describe('SellerpaymentComponent', () => {
  let component: SellerpaymentComponent;
  let fixture: ComponentFixture<SellerpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

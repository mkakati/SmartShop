import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyordersdetailsComponent } from './myordersdetails.component';

describe('MyordersdetailsComponent', () => {
  let component: MyordersdetailsComponent;
  let fixture: ComponentFixture<MyordersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyordersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyordersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

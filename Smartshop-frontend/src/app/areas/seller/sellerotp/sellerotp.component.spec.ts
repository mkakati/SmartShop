import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerotpComponent } from './sellerotp.component';

describe('SellerotpComponent', () => {
  let component: SellerotpComponent;
  let fixture: ComponentFixture<SellerotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

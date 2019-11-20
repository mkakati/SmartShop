import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroderframeComponent } from './useroderframe.component';

describe('UseroderframeComponent', () => {
  let component: UseroderframeComponent;
  let fixture: ComponentFixture<UseroderframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseroderframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroderframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

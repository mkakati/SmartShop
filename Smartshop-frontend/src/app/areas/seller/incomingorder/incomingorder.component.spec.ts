import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingorderComponent } from './incomingorder.component';

describe('IncomingorderComponent', () => {
  let component: IncomingorderComponent;
  let fixture: ComponentFixture<IncomingorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerhistoryComponent } from './salerhistory.component';

describe('SalerhistoryComponent', () => {
  let component: SalerhistoryComponent;
  let fixture: ComponentFixture<SalerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedbuyerlistComponent } from './deactivatedbuyerlist.component';

describe('DeactivatedbuyerlistComponent', () => {
  let component: DeactivatedbuyerlistComponent;
  let fixture: ComponentFixture<DeactivatedbuyerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivatedbuyerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedbuyerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

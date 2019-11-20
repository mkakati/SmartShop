import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorypageComponent } from './subcategorypage.component';

describe('SubcategorypageComponent', () => {
  let component: SubcategorypageComponent;
  let fixture: ComponentFixture<SubcategorypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategorypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbysubcategoryComponent } from './productbysubcategory.component';

describe('ProductbysubcategoryComponent', () => {
  let component: ProductbysubcategoryComponent;
  let fixture: ComponentFixture<ProductbysubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbysubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbysubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

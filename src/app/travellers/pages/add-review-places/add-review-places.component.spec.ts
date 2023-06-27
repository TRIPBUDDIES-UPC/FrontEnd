import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewPlacesComponent } from './add-review-places.component';

describe('AddReviewPlacesComponent', () => {
  let component: AddReviewPlacesComponent;
  let fixture: ComponentFixture<AddReviewPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReviewPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

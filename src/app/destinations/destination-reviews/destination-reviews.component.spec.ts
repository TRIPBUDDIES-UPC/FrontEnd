import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsReviewsComponent } from './destination-reviews.component';

describe('DestinationReviewsComponent', () => {
  let component: DestinationsReviewsComponent;
  let fixture: ComponentFixture<DestinationsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

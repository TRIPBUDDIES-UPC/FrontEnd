import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTravellerComponent } from './header-traveller.component';

describe('HeaderTravellerComponent', () => {
  let component: HeaderTravellerComponent;
  let fixture: ComponentFixture<HeaderTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

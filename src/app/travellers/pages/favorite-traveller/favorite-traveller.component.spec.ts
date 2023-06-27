import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTravellerComponent } from './favorite-traveller.component';

describe('FavoriteTravellerComponent', () => {
  let component: FavoriteTravellerComponent;
  let fixture: ComponentFixture<FavoriteTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

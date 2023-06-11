import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessesComponent } from './bussinesses.component';

describe('BussinessesComponent', () => {
  let component: BussinessesComponent;
  let fixture: ComponentFixture<BussinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

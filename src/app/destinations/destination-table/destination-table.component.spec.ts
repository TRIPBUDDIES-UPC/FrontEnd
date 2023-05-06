import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsTableComponent } from './destination-table.component';

describe('DestinationTableComponent', () => {
  let component: DestinationsTableComponent;
  let fixture: ComponentFixture<DestinationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

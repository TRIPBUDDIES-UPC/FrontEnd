import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationsTableComponent } from './destinations-table.component';

describe('DestinationsTableComponent', () => {
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


  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

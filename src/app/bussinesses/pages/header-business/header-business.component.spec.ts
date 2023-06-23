import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBusinessComponent } from './header-business.component';

describe('HeaderBusinessComponent', () => {
  let component: HeaderBusinessComponent;
  let fixture: ComponentFixture<HeaderBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

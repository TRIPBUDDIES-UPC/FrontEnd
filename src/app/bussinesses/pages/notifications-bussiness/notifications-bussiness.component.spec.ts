import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBussinessComponent } from './notifications-bussiness.component';

describe('NotificationsBussinessComponent', () => {
  let component: NotificationsBussinessComponent;
  let fixture: ComponentFixture<NotificationsBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsBussinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDialogBussinessComponent } from './notification-dialog-bussiness.component';

describe('NotificationDialogBussinessComponent', () => {
  let component: NotificationDialogBussinessComponent;
  let fixture: ComponentFixture<NotificationDialogBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDialogBussinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDialogBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

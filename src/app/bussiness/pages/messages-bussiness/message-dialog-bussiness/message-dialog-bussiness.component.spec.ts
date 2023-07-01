import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogBussinessComponent } from './message-dialog-bussiness.component';

describe('MessageDialogBussinessComponent', () => {
  let component: MessageDialogBussinessComponent;
  let fixture: ComponentFixture<MessageDialogBussinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageDialogBussinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDialogBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

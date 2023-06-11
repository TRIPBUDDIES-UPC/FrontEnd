import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTravellerComponent } from './settings-traveller.component';

describe('SettingsTravellerComponent', () => {
  let component: SettingsTravellerComponent;
  let fixture: ComponentFixture<SettingsTravellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTravellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlecturesComponent } from './guestlectures.component';

describe('GuestlecturesComponent', () => {
  let component: GuestlecturesComponent;
  let fixture: ComponentFixture<GuestlecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestlecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestlecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDPComponent } from './sdp.component';

describe('SDPComponent', () => {
  let component: SDPComponent;
  let fixture: ComponentFixture<SDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

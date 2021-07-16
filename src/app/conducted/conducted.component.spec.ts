import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductedComponent } from './conducted.component';

describe('ConductedComponent', () => {
  let component: ConductedComponent;
  let fixture: ComponentFixture<ConductedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

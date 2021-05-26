import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHODComponent } from './admin-hod.component';

describe('AdminHODComponent', () => {
  let component: AdminHODComponent;
  let fixture: ComponentFixture<AdminHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHODComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

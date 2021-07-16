import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkhopsComponent } from './workhops.component';

describe('WorkhopsComponent', () => {
  let component: WorkhopsComponent;
  let fixture: ComponentFixture<WorkhopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkhopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkhopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

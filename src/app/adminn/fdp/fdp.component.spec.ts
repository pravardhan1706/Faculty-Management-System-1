import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDPComponent } from './fdp.component';

describe('FDPComponent', () => {
  let component: FDPComponent;
  let fixture: ComponentFixture<FDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

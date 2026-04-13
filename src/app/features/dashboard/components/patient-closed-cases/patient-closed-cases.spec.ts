import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClosedCases } from './patient-closed-cases';

describe('PatientClosedCases', () => {
  let component: PatientClosedCases;
  let fixture: ComponentFixture<PatientClosedCases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientClosedCases],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientClosedCases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

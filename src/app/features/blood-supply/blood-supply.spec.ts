import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodSupply } from './blood-supply';

describe('BloodSupply', () => {
  let component: BloodSupply;
  let fixture: ComponentFixture<BloodSupply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodSupply],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodSupply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

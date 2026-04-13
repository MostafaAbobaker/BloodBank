import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDisposal } from './blood-disposal';

describe('BloodDisposal', () => {
  let component: BloodDisposal;
  let fixture: ComponentFixture<BloodDisposal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodDisposal],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodDisposal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTesting } from './blood-testing';

describe('BloodTesting', () => {
  let component: BloodTesting;
  let fixture: ComponentFixture<BloodTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodTesting],
    }).compileComponents();

    fixture = TestBed.createComponent(BloodTesting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

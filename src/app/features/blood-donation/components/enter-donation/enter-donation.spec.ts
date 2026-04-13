import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDonation } from './enter-donation';

describe('EnterDonation', () => {
  let component: EnterDonation;
  let fixture: ComponentFixture<EnterDonation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterDonation],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterDonation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

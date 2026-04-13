import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearExpiry } from './near-expiry';

describe('NearExpiry', () => {
  let component: NearExpiry;
  let fixture: ComponentFixture<NearExpiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearExpiry],
    }).compileComponents();

    fixture = TestBed.createComponent(NearExpiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

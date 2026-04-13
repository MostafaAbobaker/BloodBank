import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonor } from './new-donor';

describe('NewDonor', () => {
  let component: NewDonor;
  let fixture: ComponentFixture<NewDonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDonor],
    }).compileComponents();

    fixture = TestBed.createComponent(NewDonor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

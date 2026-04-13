import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unscreened } from './unscreened';

describe('Unscreened', () => {
  let component: Unscreened;
  let fixture: ComponentFixture<Unscreened>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unscreened],
    }).compileComponents();

    fixture = TestBed.createComponent(Unscreened);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

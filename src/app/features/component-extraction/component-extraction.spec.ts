import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExtraction } from './component-extraction';

describe('ComponentExtraction', () => {
  let component: ComponentExtraction;
  let fixture: ComponentFixture<ComponentExtraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExtraction],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentExtraction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

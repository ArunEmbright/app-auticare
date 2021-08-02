import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPage5Component } from './assessment-page5.component';

describe('AssessmentPage5Component', () => {
  let component: AssessmentPage5Component;
  let fixture: ComponentFixture<AssessmentPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPage5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

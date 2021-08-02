import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPage3Component } from './assessment-page3.component';

describe('AssessmentPage3Component', () => {
  let component: AssessmentPage3Component;
  let fixture: ComponentFixture<AssessmentPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

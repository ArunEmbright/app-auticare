import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPage2Component } from './assessment-page2.component';

describe('AssessmentPage2Component', () => {
  let component: AssessmentPage2Component;
  let fixture: ComponentFixture<AssessmentPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

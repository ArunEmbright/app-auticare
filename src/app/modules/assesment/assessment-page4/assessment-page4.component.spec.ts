import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPage4Component } from './assessment-page4.component';

describe('AssessmentPage4Component', () => {
  let component: AssessmentPage4Component;
  let fixture: ComponentFixture<AssessmentPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

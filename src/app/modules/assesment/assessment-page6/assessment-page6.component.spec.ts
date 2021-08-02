import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPage6Component } from './assessment-page6.component';

describe('AssessmentPage6Component', () => {
  let component: AssessmentPage6Component;
  let fixture: ComponentFixture<AssessmentPage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPage6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

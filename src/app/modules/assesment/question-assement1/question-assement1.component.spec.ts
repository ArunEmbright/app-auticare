import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement1Component } from './question-assement1.component';

describe('QuestionAssement1Component', () => {
  let component: QuestionAssement1Component;
  let fixture: ComponentFixture<QuestionAssement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

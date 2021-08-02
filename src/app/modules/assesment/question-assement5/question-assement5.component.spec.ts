import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement5Component } from './question-assement5.component';

describe('QuestionAssement5Component', () => {
  let component: QuestionAssement5Component;
  let fixture: ComponentFixture<QuestionAssement5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

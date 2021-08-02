import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement6Component } from './question-assement6.component';

describe('QuestionAssement6Component', () => {
  let component: QuestionAssement6Component;
  let fixture: ComponentFixture<QuestionAssement6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

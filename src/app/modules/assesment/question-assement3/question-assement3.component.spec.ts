import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement3Component } from './question-assement3.component';

describe('QuestionAssement3Component', () => {
  let component: QuestionAssement3Component;
  let fixture: ComponentFixture<QuestionAssement3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

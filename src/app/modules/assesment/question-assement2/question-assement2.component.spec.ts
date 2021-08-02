import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement2Component } from './question-assement2.component';

describe('QuestionAssement2Component', () => {
  let component: QuestionAssement2Component;
  let fixture: ComponentFixture<QuestionAssement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

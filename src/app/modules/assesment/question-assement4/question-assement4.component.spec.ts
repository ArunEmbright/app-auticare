import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssement4Component } from './question-assement4.component';

describe('QuestionAssement4Component', () => {
  let component: QuestionAssement4Component;
  let fixture: ComponentFixture<QuestionAssement4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssement4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

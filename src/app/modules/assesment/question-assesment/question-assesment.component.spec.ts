import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssesmentComponent } from './question-assesment.component';

describe('QuestionAssesmentComponent', () => {
  let component: QuestionAssesmentComponent;
  let fixture: ComponentFixture<QuestionAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

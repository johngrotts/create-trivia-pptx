import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTriviaPptComponent } from './create-trivia-ppt.component';

describe('CreateTriviaPptComponent', () => {
  let component: CreateTriviaPptComponent;
  let fixture: ComponentFixture<CreateTriviaPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTriviaPptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTriviaPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsCardComponent } from './testimonials-card.component';

describe('TestimonialsCardComponent', () => {
  let component: TestimonialsCardComponent;
  let fixture: ComponentFixture<TestimonialsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsCardComponent]
    });
    fixture = TestBed.createComponent(TestimonialsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

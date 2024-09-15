import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDisplayComponent } from './work-display.component';

describe('WorkDisplayComponent', () => {
  let component: WorkDisplayComponent;
  let fixture: ComponentFixture<WorkDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDisplayComponent]
    });
    fixture = TestBed.createComponent(WorkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

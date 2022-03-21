import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancysubmittedComponent } from './vacancysubmitted.component';

describe('VacancysubmittedComponent', () => {
  let component: VacancysubmittedComponent;
  let fixture: ComponentFixture<VacancysubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancysubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancysubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

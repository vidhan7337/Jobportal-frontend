import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvacancyComponent } from './showvacancy.component';

describe('ShowvacancyComponent', () => {
  let component: ShowvacancyComponent;
  let fixture: ComponentFixture<ShowvacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

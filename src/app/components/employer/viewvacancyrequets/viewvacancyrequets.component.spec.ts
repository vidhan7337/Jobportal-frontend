import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvacancyrequetsComponent } from './viewvacancyrequets.component';

describe('ViewvacancyrequetsComponent', () => {
  let component: ViewvacancyrequetsComponent;
  let fixture: ComponentFixture<ViewvacancyrequetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvacancyrequetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvacancyrequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

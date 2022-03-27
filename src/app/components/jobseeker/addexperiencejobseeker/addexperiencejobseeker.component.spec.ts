import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexperiencejobseekerComponent } from './addexperiencejobseeker.component';

describe('AddexperiencejobseekerComponent', () => {
  let component: AddexperiencejobseekerComponent;
  let fixture: ComponentFixture<AddexperiencejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexperiencejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexperiencejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

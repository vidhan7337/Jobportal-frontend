import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqualificationjobseekerComponent } from './addqualificationjobseeker.component';

describe('AddqualificationjobseekerComponent', () => {
  let component: AddqualificationjobseekerComponent;
  let fixture: ComponentFixture<AddqualificationjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddqualificationjobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqualificationjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

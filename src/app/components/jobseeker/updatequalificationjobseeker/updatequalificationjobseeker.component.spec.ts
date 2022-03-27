import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequalificationjobseekerComponent } from './updatequalificationjobseeker.component';

describe('UpdatequalificationjobseekerComponent', () => {
  let component: UpdatequalificationjobseekerComponent;
  let fixture: ComponentFixture<UpdatequalificationjobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequalificationjobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequalificationjobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

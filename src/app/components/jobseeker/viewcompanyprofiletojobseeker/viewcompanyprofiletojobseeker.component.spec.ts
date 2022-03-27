import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompanyprofiletojobseekerComponent } from './viewcompanyprofiletojobseeker.component';

describe('ViewcompanyprofiletojobseekerComponent', () => {
  let component: ViewcompanyprofiletojobseekerComponent;
  let fixture: ComponentFixture<ViewcompanyprofiletojobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcompanyprofiletojobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompanyprofiletojobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

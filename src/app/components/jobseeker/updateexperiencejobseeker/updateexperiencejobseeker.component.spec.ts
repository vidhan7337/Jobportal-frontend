import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateexperiencejobseekerComponent } from './updateexperiencejobseeker.component';

describe('UpdateexperiencejobseekerComponent', () => {
  let component: UpdateexperiencejobseekerComponent;
  let fixture: ComponentFixture<UpdateexperiencejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateexperiencejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateexperiencejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilejobseekerComponent } from './addprofilejobseeker.component';

describe('AddprofilejobseekerComponent', () => {
  let component: AddprofilejobseekerComponent;
  let fixture: ComponentFixture<AddprofilejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofilejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

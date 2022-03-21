import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerprofileComponent } from './employerprofile.component';

describe('EmployerprofileComponent', () => {
  let component: EmployerprofileComponent;
  let fixture: ComponentFixture<EmployerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

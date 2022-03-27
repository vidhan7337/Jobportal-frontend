import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofilejobseekerComponent } from './updateprofilejobseeker.component';

describe('UpdateprofilejobseekerComponent', () => {
  let component: UpdateprofilejobseekerComponent;
  let fixture: ComponentFixture<UpdateprofilejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprofilejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprofilejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

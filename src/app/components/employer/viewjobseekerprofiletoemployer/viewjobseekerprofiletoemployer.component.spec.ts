import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobseekerprofiletoemployerComponent } from './viewjobseekerprofiletoemployer.component';

describe('ViewjobseekerprofiletoemployerComponent', () => {
  let component: ViewjobseekerprofiletoemployerComponent;
  let fixture: ComponentFixture<ViewjobseekerprofiletoemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewjobseekerprofiletoemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjobseekerprofiletoemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

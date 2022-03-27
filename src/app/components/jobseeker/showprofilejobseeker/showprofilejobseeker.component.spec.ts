import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprofilejobseekerComponent } from './showprofilejobseeker.component';

describe('ShowprofilejobseekerComponent', () => {
  let component: ShowprofilejobseekerComponent;
  let fixture: ComponentFixture<ShowprofilejobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowprofilejobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprofilejobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

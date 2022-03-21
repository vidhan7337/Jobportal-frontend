import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployerprofileComponent } from './updateemployerprofile.component';

describe('UpdateemployerprofileComponent', () => {
  let component: UpdateemployerprofileComponent;
  let fixture: ComponentFixture<UpdateemployerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemployerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateemployerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

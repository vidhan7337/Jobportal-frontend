import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployerprofileComponent } from './addemployerprofile.component';

describe('AddemployerprofileComponent', () => {
  let component: AddemployerprofileComponent;
  let fixture: ComponentFixture<AddemployerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployerprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCameraComponent } from './open-camera.component';

describe('OpenCameraComponent', () => {
  let component: OpenCameraComponent;
  let fixture: ComponentFixture<OpenCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

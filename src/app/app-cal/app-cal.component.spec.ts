import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalComponent } from './app-cal.component';

describe('AppCalComponent', () => {
  let component: AppCalComponent;
  let fixture: ComponentFixture<AppCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

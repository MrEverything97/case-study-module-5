import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFinallyComponent } from './register-finally.component';

describe('RegisterFinallyComponent', () => {
  let component: RegisterFinallyComponent;
  let fixture: ComponentFixture<RegisterFinallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFinallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFinallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

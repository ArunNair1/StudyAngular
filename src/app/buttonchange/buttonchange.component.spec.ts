import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonchangeComponent } from './buttonchange.component';

describe('ButtonchangeComponent', () => {
  let component: ButtonchangeComponent;
  let fixture: ComponentFixture<ButtonchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

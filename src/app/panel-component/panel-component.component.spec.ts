import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelComponentComponent } from './panel-component.component';

describe('PanelComponentComponent', () => {
  let component: PanelComponentComponent;
  let fixture: ComponentFixture<PanelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

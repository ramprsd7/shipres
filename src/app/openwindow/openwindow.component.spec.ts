import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenwindowComponent } from './openwindow.component';

describe('OpenwindowComponent', () => {
  let component: OpenwindowComponent;
  let fixture: ComponentFixture<OpenwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshipComponent } from './viewship.component';

describe('ViewshipComponent', () => {
  let component: ViewshipComponent;
  let fixture: ComponentFixture<ViewshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchdcomComponent } from './schdcom.component';

describe('SchdcomComponent', () => {
  let component: SchdcomComponent;
  let fixture: ComponentFixture<SchdcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchdcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchdcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelrouteComponent } from './delroute.component';

describe('DelrouteComponent', () => {
  let component: DelrouteComponent;
  let fixture: ComponentFixture<DelrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

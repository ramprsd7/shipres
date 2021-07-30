import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResshipComponent } from './resship.component';

describe('ResshipComponent', () => {
  let component: ResshipComponent;
  let fixture: ComponentFixture<ResshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

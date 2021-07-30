import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelshipComponent } from './delship.component';

describe('DelshipComponent', () => {
  let component: DelshipComponent;
  let fixture: ComponentFixture<DelshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

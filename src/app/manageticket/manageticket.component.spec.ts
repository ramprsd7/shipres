import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageticketComponent } from './manageticket.component';

describe('ManageticketComponent', () => {
  let component: ManageticketComponent;
  let fixture: ComponentFixture<ManageticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

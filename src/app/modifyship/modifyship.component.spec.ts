import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyshipComponent } from './modifyship.component';

describe('ModifyshipComponent', () => {
  let component: ModifyshipComponent;
  let fixture: ComponentFixture<ModifyshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

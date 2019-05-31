import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealFragmentUserComponent } from './real-fragment-user.component';

describe('RealFragmentUserComponent', () => {
  let component: RealFragmentUserComponent;
  let fixture: ComponentFixture<RealFragmentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealFragmentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealFragmentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

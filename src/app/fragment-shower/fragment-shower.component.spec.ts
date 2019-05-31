import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentShowerComponent } from './fragment-shower.component';

describe('FragmentShowerComponent', () => {
  let component: FragmentShowerComponent;
  let fixture: ComponentFixture<FragmentShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragmentShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

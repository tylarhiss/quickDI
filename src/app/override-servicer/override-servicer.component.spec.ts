import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideServicerComponent } from './override-servicer.component';

describe('OverrideServicerComponent', () => {
  let component: OverrideServicerComponent;
  let fixture: ComponentFixture<OverrideServicerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverrideServicerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverrideServicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModuleCompComponent } from './sub-module-comp.component';

describe('SubModuleCompComponent', () => {
  let component: SubModuleCompComponent;
  let fixture: ComponentFixture<SubModuleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubModuleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModuleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

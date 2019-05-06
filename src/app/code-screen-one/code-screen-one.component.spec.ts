import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeScreenOneComponent } from './code-screen-one.component';

describe('CodeScreenOneComponent', () => {
  let component: CodeScreenOneComponent;
  let fixture: ComponentFixture<CodeScreenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeScreenOneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeScreenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryOneScreenComponent } from './victory-one-screen.component';

describe('VictoryOneScreenComponent', () => {
  let component: VictoryOneScreenComponent;
  let fixture: ComponentFixture<VictoryOneScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryOneScreenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

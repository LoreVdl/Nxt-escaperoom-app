import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeOneComponent } from './qr-code-one.component';

describe('QRCodeOneComponent', () => {
  let component: QRCodeOneComponent;
  let fixture: ComponentFixture<QRCodeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRCodeOneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRCodeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

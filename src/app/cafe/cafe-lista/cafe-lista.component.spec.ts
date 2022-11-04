/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListaComponent } from './cafe-lista.component';

describe('CafeListaComponent', () => {
  let component: CafeListaComponent;
  let fixture: ComponentFixture<CafeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VBU4Component } from './vbu4.component';

describe('VBU4Component', () => {
  let component: VBU4Component;
  let fixture: ComponentFixture<VBU4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VBU4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VBU4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

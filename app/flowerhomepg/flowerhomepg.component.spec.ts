import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerhomepgComponent } from './flowerhomepg.component';

describe('FlowerhomepgComponent', () => {
  let component: FlowerhomepgComponent;
  let fixture: ComponentFixture<FlowerhomepgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerhomepgComponent]
    });
    fixture = TestBed.createComponent(FlowerhomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

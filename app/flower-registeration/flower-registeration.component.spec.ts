import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerRegisterationComponent } from './flower-registeration.component';

describe('FlowerRegisterationComponent', () => {
  let component: FlowerRegisterationComponent;
  let fixture: ComponentFixture<FlowerRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerRegisterationComponent]
    });
    fixture = TestBed.createComponent(FlowerRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductimagesComponent } from './showproductimages.component';

describe('ShowproductimagesComponent', () => {
  let component: ShowproductimagesComponent;
  let fixture: ComponentFixture<ShowproductimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowproductimagesComponent]
    });
    fixture = TestBed.createComponent(ShowproductimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

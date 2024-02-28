import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsersComponent } from './login-users.component';

describe('LoginUsersComponent', () => {
  let component: LoginUsersComponent;
  let fixture: ComponentFixture<LoginUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUsersComponent]
    });
    fixture = TestBed.createComponent(LoginUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

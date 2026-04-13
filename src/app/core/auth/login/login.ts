import { Component, inject, signal } from '@angular/core';
import { LoginService } from '../services/loginService';
import { LoginData } from '../interface/login-data';
import {email, form, FormField, required} from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly _loginService = inject(LoginService);
  passwordVisible: boolean = false;

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email is required'});
    email(schemaPath.email, {message: 'Enter a valid email address'});
    required(schemaPath.password, {message: 'Password is required'});
  });


  onSubmit(event: Event) {
    debugger
    event.preventDefault();
    // الطريقة الصحيحة: التحقق من كل حقل
  const emailValid = !this.loginForm.email().invalid();
  const passwordValid = !this.loginForm.password().invalid();

  if (emailValid && passwordValid) {
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    
    this._loginService.login(credentials).subscribe({
      next: (res) => {console.log('Login success:', res)},
      error: (err) => console.log('Login failed:', err),
    });
  }

  }

}

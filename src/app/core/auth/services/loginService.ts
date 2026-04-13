import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginData } from '../interface/login-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly _http = inject(HttpClient);
  login(loginForm: LoginData):Observable<any> {
    return this._http.post( 'auth/signin', loginForm);
  }
}

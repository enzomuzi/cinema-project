import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReturnType } from '../../types/login-return.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string) {
    return this.httpClient.post<LoginReturnType>('http://localhost:8080/auth/login', {
      login,
      password
    }).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token);
      })
    )
  }
}

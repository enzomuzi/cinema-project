import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReturnType } from '../../types/login-return.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(register: string, password: string, role: 'USER') {
    return this.httpClient.post<LoginReturnType>('http://localhost:8080/auth/register', {
      register,
      password,
      role
    }).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token);
      })
    )
  }

}

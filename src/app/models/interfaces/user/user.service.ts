import { SignupUserResponse } from './SignupUserResponse';
import { SignupUserRequest } from './SignupUserRequest';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { AuthRequest } from './auth/AuthRequest';
import { AuthResponse } from './auth/AuthResponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL=enviroment.API_URL;

  constructor(private http: HttpClient) {}

   signupUser(requestDatas: SignupUserRequest):Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
       requestDatas
      );
  }

authUser(requestDatas: AuthRequest): Observable<AuthResponse>{

  return this.http.post<AuthResponse>(`${this.API_URL}/auth`,requestDatas);

}

}

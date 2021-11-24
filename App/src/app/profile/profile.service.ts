import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, SignupRequest } from './profile.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  get url() {
    return `${environment.api}auth/`;
  }
  constructor(
    private http: HttpClient
  ) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post(this.url+"login",request) as Observable<LoginResponse>;
  }

  signup(request: SignupRequest) {
    return this.http.post(this.url+"signup",request);
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}

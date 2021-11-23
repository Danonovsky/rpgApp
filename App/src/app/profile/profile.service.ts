import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest, SignupRequest } from './profile.models';

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

  login(request: LoginRequest) {
    return this.http.post(this.url+"login",request);
  }

  signup(request: SignupRequest) {
    return this.http.post(this.url+"signup",request);
  }
}

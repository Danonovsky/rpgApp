import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  login(request: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(this.url+"login", request, { observe: 'response' });
  }

  signup(request: SignupRequest): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url+"signup", request, { observe: 'response' });
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}

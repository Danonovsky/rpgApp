import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse, PublicUserResponse, SignupRequest } from './profile.models';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  get url() {
    return `${environment.api}auth/`;
  }
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  login(request: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(this.url+"login", request, { observe: 'response' });
  }

  signup(request: SignupRequest): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url+"signup", request, { observe: 'response' });
  }

  get(id: string) {
    return this.http.get<PublicUserResponse>(this.url+id, { observe: 'response' });
  }

  isOwner(id: string) {
    const t = localStorage.getItem("jwt");
    if(t) {
      return id == this.jwtHelper.decodeToken(t)["id"];
    }
    return false;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}

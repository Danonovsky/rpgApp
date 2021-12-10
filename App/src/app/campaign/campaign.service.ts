import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SetUrlResponse } from '../shared/models';
import { CampaignRequest, CampaignResponse } from './campaign.models';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  get url() {
    return `${environment.api}campaign/`;
  }
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  isOwner(userId: string) {
    var token = localStorage.getItem("jwt");
    if(!token) return false;
    return this.jwtHelper.decodeToken(token)['id'] === userId;
  }

  findPublic(): Observable<HttpResponse<CampaignResponse[]>> {
    return this.http.get<CampaignResponse[]>(this.url+"public", { observe: 'response' });
  }

  findUser(): Observable<HttpResponse<CampaignResponse[]>> {
    return this.http.get<CampaignResponse[]>(this.url+"user", { observe: 'response' });
  }

  findGuest(): Observable<HttpResponse<CampaignResponse[]>> {
    return this.http.get<CampaignResponse[]>(this.url+"guest", { observe: 'response' });
  }

  get(id: string): Observable<HttpResponse<CampaignResponse>> {
    return this.http.get<CampaignResponse>(this.url+id, { observe: 'response' });
  }

  add(request: CampaignRequest): Observable<HttpResponse<CampaignResponse>> {
    return this.http.post<CampaignResponse>(this.url, request, { observe: 'response' });
  }

  edit(request: CampaignRequest, id: string): Observable<HttpResponse<CampaignResponse>> {
    return this.http.put<CampaignResponse>(this.url+id, request, { observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(this.url+id, { observe: 'response' });
  }

  setUrl(id: string, request: FormData): Observable<HttpResponse<SetUrlResponse>> {
    return this.http.patch<SetUrlResponse>(`${this.url}Img/${id}`, request, { observe: 'response'});
  }

  join(id: string): Observable<HttpResponse<boolean>> {
    return this.http.get<boolean>(`${this.url}Join/${id}`, { observe: 'response'});
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetUrlResponse } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { AddLocationRequest, EditLocationRequest, LocationResponse } from './locations.models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  get url() {
    return `${environment.api}Location/`;
  }
  constructor(
    private http: HttpClient
  ) { }

  get(id: string) {
    return this.http.get<LocationResponse>(`${this.url}${id}`, { observe: 'response' });
  }

  getAll(campaignId: string) {
    return this.http.get<LocationResponse[]>(`${this.url}List/${campaignId}`, { observe: 'response' });
  }

  add(request: AddLocationRequest) : Observable<HttpResponse<LocationResponse>> {
    return this.http.post<LocationResponse>(`${this.url}`, request, { observe: 'response' });
  }

  update(request: EditLocationRequest) {
    return this.http.put<LocationResponse>(`${this.url}`, request, { observe: 'response' });
  }

  delete(id: string) {
      return this.http.delete<boolean>(`${this.url}${id}`, { observe: 'response'} );
  }
}

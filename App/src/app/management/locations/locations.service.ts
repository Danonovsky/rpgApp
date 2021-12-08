import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationResponse } from './locations.models';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  get url() {
    return environment.api;
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
}

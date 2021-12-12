import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CampaignPlayerResponse } from './players.models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  get url() {
    return `${environment.api}player/`;
  }
  constructor(
    private http: HttpClient
  ) { }

  getAll(campaignId: string) {
    return this.http.get<CampaignPlayerResponse[]>(`${this.url}List/${campaignId}`, { observe: 'response' });
  }

  delete(id: string) {
    return this.http.delete<boolean>(this.url+id, { observe: 'response' });
  }
}

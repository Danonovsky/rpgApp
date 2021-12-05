import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { environment } from 'src/environments/environment';
import { Character } from './character.models';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  get url() {
    return `${environment.api}character/`;
  }
  constructor(
    private http: HttpClient,
    private campaignService: CampaignService
  ) { }

  rollCharacter(campaignId: string, system: string): Observable<HttpResponse<Character>> {
    return this.http.get<Character>(`${this.url}RollAll/${system}`, { observe: 'response' });
  }
}

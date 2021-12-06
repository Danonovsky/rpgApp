import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { environment } from 'src/environments/environment';
import { Character, CharacterRollRequest } from './character.models';

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

  rollCharacter(request: CharacterRollRequest): Observable<HttpResponse<Character>> {
    return this.http.post<Character>(`${this.url}RollAll`, request, { observe: 'response' });
  }

  getRaces(systemName: string): Observable<HttpResponse<string[]>> {
    return this.http.get<string[]>(`${this.url}Races/${systemName}`, { observe: 'response' });
  }
}

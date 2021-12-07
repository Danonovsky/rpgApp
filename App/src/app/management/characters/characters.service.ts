import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignService } from 'src/app/campaign/campaign.service';
import { environment } from 'src/environments/environment';
import { AddCharacterRequest, Character, CharacterResponse, CharacterRollRequest, CharacterSimpleResponse } from './character.models';

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

  addCharacter(request: AddCharacterRequest): Observable<HttpResponse<boolean>> {
    console.log(request);
    return this.http.post<boolean>(`${this.url}`, request, { observe: 'response' });
  }

  getAllCharacters(cammpaignId: string): Observable<HttpResponse<CharacterSimpleResponse[]>> {
    return this.http.get<CharacterSimpleResponse[]>(`${this.url}${cammpaignId}`, { observe: 'response' });
  }

  get(characterId: string): Observable<HttpResponse<CharacterResponse>> {
    return this.http.get<CharacterResponse>(`${this.url}Get/${characterId}`, { observe: 'response' });
  }
}

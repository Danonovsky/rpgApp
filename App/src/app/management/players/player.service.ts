import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterResponse } from '../characters/character.models';
import { AssignCharacterRequest, CampaignPlayerResponse, UnassignCharacterRequest } from './players.models';

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

  getAvailableCharacters(campaignId: string) {
    return this.http.get<CharacterResponse[]>(`${this.url}Available/${campaignId}`, { observe: 'response' });
  }

  assignCharacter(request: AssignCharacterRequest) {
    return this.http.post<CampaignPlayerResponse>(`${this.url}AssignCharacter`, request, { observe: 'response' });
  }

  unassignCharacter(request: UnassignCharacterRequest) {
    return this.http.post<CampaignPlayerResponse>(`${this.url}UnassignCharacter`, request, { observe: 'response' });
  }

  delete(id: string) {
    return this.http.delete<boolean>(this.url+id, { observe: 'response' });
  }
}

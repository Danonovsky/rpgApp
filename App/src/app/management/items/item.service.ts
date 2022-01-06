import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddItemRequest, AssignItemToCharacterRequest, ItemResponse } from './items.models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  get url() {
    return `${environment.api}item/`;
  }
  constructor(
    private http: HttpClient
  ) { }

  get(id: string) {
    return this.http.get<ItemResponse>(this.url+id, { observe: 'response' });
  }

  getAll(campaignId: string) {
    return this.http.get<ItemResponse[]>(`${this.url}List/${campaignId}`, { observe: 'response' });
  }

  add(request: AddItemRequest) {
    return this.http.post<ItemResponse>(this.url, request, { observe: 'response' });
  }

  delete(id: string) {
    return this.http.delete<boolean>(this.url+id, { observe: 'response' });
  }

  getAvailable(campaignId: string) {
    return this.http.get<ItemResponse[]>(this.url+"Available/"+campaignId, { observe: 'response' });
  }

  remove(id: string) {
    return this.http.delete<boolean>(this.url+"Remove/"+id, { observe: 'response' });
  }

  assignToCharacter(request: AssignItemToCharacterRequest) {
    return this.http.post<boolean>(this.url+"AssignToCharacter", request, { observe: 'response' });
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetUrlResponse } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { AddItemRequest, ItemResponse } from './items.models';

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
}

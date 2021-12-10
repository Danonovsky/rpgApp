import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SetUrlResponse } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { AddNoteRequest, NoteResponse } from './notes.models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  get url() {
    return `${environment.api}note/`;
  }
  constructor(
    private http: HttpClient
  ) { }

  get(id: string) {
    return this.http.get<NoteResponse>(this.url+id, { observe: 'response' });
  }

  getAll(campaignId: string) {
    return this.http.get<NoteResponse[]>(`${this.url}${campaignId}`, { observe: 'response' });
  }

  add(request: AddNoteRequest) {
    return this.http.post<NoteResponse>(this.url, request, { observe: 'response' });
  }

  delete(id: string) {
    return this.http.delete<boolean>(this.url+id, { observe: 'response' });
  }

  setUrl(id: string, request: FormData) {
    return this.http.patch<SetUrlResponse>(this.url+id, request, { observe: 'response'});
  }
}

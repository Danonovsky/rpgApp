import { HttpClient, HttpResponse } from '@angular/common/http';
import * as signalR from "@microsoft/signalr";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Roll, RollResult } from '../shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private hubConnection?: signalR.HubConnection;

  constructor(
    private http: HttpClient
  ) { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.api}game`, { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets})
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addSingleRollListener() {
    this.hubConnection?.on('broadcastSingleRoll', (data) => {
      //this.data = data;
      console.log(data as RollResult);
    });
  }

  public singleRoll(request: Roll) {
    this.hubConnection?.invoke('broadcastSingleRoll', request)
    .catch(err => console.log(err));
  }
}

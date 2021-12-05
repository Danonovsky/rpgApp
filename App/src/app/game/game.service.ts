import { HttpClient, HttpResponse } from '@angular/common/http';
import * as signalR from "@microsoft/signalr";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Roll, RollResult } from '../shared/models';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private hubConnection?: signalR.HubConnection;
  public rollResult: Subject<RollResult>= new Subject<RollResult>();

  constructor(
    private http: HttpClient
  ) { 
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.api}game`, { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets})
    .build();

  this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err));
  }

  public listenSingleRoll() {
    this.hubConnection?.on('broadcastSingleRoll', (data) => {
      this.rollResult.next(data as RollResult);
    });
  }

  public singleRoll(request: Roll) {
    this.hubConnection?.invoke('broadcastSingleRoll', request)
    .catch(err => console.log(err));
  }
}

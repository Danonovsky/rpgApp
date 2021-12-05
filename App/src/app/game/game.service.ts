import { HttpClient } from '@angular/common/http';
import * as signalR from "@microsoft/signalr";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RollResult } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private hubConnection?: signalR.HubConnection


  constructor(
    private http: HttpClient
  ) { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.api}gameHub`)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addSingleRollListener() {
    this.hubConnection?.on('singleRoll', (data) => {
      //this.data = data;
      console.log(data as RollResult);
    })
  }
}

import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
import { LooseObject, SocketMessage } from './types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class SocketService {
  private readonly _socket: Socket;

  private readonly _apiUrl: string = `${environment.apiUrl}/events`;

  constructor() {
    this._socket = io(this._apiUrl);
  }

  public sendMessage(socketMessage: SocketMessage): void {
    this._socket.emit(socketMessage.event, socketMessage.payload);
  }

  public onMessage(socketEvent: string): Observable<LooseObject> {
    return new Observable((observer: Subscriber<LooseObject>) => {
      this._socket.on(socketEvent, (data: LooseObject) => observer.next(data));
      return () => this._socket.off(socketEvent);
    });
  }

  public disconnect(): void {
    this._socket.disconnect();
  }
}

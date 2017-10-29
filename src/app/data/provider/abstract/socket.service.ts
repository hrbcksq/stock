import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class SocketService {
  private static socketInstance: WebSocket;
  private static onMessageStream: Observable<string>;
  protected get socket() {
    return SocketService.socketInstance;
  }

  constructor(url: string) {
    if (!SocketService.socketInstance) {
      SocketService.socketInstance = new WebSocket(url);
    };
  }

  public onConnect() {
    return new Promise((resolve, reject) => {
      this.socket.onopen = resolve;
      this.socket.onerror = reject;
    });
  }

  public onDisconnect() {
    return new Promise((resolve, reject) => {
      this.socket.onclose = resolve;
    });
  }

  protected onMessage() {
    if (!SocketService.onMessageStream) {
      SocketService.onMessageStream = Observable.bindCallback<string>((callback) => {
        this.socket.onmessage = (event) => {
          callback(event.data);
        }
      })()
    }
    return SocketService.onMessageStream;
  }
}

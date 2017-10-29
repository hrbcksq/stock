import { SocketService } from './abstract/socket.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StockService extends SocketService {

  constructor() {
    super('ws://localhost:8080/');
  }

  onCandles() {
    return this.onMessage().map(message => JSON.parse(message));
  }

}

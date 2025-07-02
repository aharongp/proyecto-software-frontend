import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class AppSocketService extends Socket {

  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor(
    public cookieService: CookieService,

  ) {
    super({
      url: 'http://localhost:3000',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        },
      }
    })
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('message', res => this.outEven.emit(res));

  }
  
  emitEvent = (payload = {}) => {
    this.ioSocket.emit('message', payload)

  }

  reconnectToRoom(room: string) {
    this.ioSocket.io.opts.query = { nameRoom: room };
    this.ioSocket.disconnect();
    this.ioSocket.connect();
  }
}

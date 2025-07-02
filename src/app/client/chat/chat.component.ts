import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppSocketService } from 'src/app/app.socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  roleID: string = localStorage.getItem('rolId');

  room: string;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private socketWebService: AppSocketService

  ) {
    this.socketWebService.outEven.subscribe( res => {
      this.join()
    })

   }

  messages: any[] = [];
  messageText = '';
  joined = false;
  name = '';
  typingDisplay = '';

  messageHandler: any;
  typingHandler: any;

  ngOnInit() {
    this.name = localStorage.getItem('userName');
    this.route.paramMap.subscribe(params => {
      this.room = params.get('room');
      this.cookieService.set('room', this.room);

      this.socketWebService.reconnectToRoom(this.room);

      // Limpia el estado y listeners anteriores
      this.messages = [];
      this.messageText = '';
      this.typingDisplay = '';
      if (this.messageHandler) {
        this.socketWebService.off('message', this.messageHandler);
      }
      if (this.typingHandler) {
        this.socketWebService.off('typing', this.typingHandler);
      }

      // Vuelve a suscribirte y pedir mensajes de la nueva sala
      this.messageHandler = (msg: any) => {
        this.messages.push(msg);
      };
      this.typingHandler = ({ name, isTyping }) => {
        this.typingDisplay = isTyping ? `${name} is typing...` : '';
      };
      this.socketWebService.on('message', this.messageHandler);
      this.socketWebService.on('typing', this.typingHandler);

      this.socketWebService.emit('findAllMessages', {}, (res: any) => {
        this.messages = res;
      });
      this.socketWebService.emit('join', { name: this.name }, () => {
        this.joined = true;
      });
    });
  }

  join() {
    this.socketWebService.emit('join', { name: this.name }, () => {
      this.joined = true;
    });
  }

  sendMessage() {
    this.socketWebService.emit('createMessage', { text: this.messageText }, () => {
      this.messageText = '';
    });
  }

  timeout: any;
  emitTyping() {
    this.socketWebService.emit('typing', { isTyping: true });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.socketWebService.emit('typing', { isTyping: false });
    }, 2000);
  }

  ngOnDestroy() {
    // Salir de la sala en el backend
    this.socketWebService.emit('leave', { room: this.room, name: this.name });
    this.cookieService.delete('room');

    this.messages = [];
    this.messageText = '';
    this.joined = false;
    this.name = '';
    this.typingDisplay = '';

    this.socketWebService.off('message', this.messageHandler);
    this.socketWebService.off('typing', this.typingHandler);
  }
}

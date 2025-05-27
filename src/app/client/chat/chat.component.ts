import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppSocketService } from 'src/app/app.socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

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

  ngOnInit() {
    this.room = this.route.snapshot.paramMap.get('room');
    this.cookieService.set('room', this.room)

    this.socketWebService.emit('findAllMessages', {}, (res: any) => {
      this.messages = res;
    });

    this.socketWebService.on('message', (msg: any) => {
      this.messages.push(msg);
    });

    this.socketWebService.on('typing', ({ name, isTyping }) => {
      if (isTyping) {
        this.typingDisplay = `${name} is typing...`;
      } else {
        this.typingDisplay = '';
      }
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
}

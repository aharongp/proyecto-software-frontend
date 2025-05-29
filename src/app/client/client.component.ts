import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  pages: any = [];
  userId: any;
  userName: string;

  constructor(private appService: AppService) {
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('userName');
   }

  ngOnInit():void {
    this.getpages();
  }

  getpages() {
    this.appService.getAllpages().subscribe(data => {
      this.pages = data;
      console.log(data)
    })
  }
}

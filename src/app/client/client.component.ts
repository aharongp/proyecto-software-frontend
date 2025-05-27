import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title:string;
  typeOrder: string;
  img: string;
  description: string;
  clientId: string;

  constructor(private appService: AppService) {
    this.clientId = localStorage.getItem('userId');
   }


  postOrder() {
    this.appService.postOrder(this.title, this.description, this.img, +this.clientId, this.typeOrder).subscribe(data => {
      console.log(data)
    });
  }
}

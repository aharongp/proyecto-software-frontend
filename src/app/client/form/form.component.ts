import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
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

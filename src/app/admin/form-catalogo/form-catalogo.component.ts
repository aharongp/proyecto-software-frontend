import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form-catalogo',
  templateUrl: './form-catalogo.component.html',
  styleUrls: ['./form-catalogo.component.css']
})
export class FormCatalogoComponent {
  titulo:string;
  url: string;
  description: string;
  clientId: string;

  constructor(private appService: AppService) {
    this.clientId = localStorage.getItem('userId');
   }


  postPage() {
    this.appService.postPage(this.titulo, this.description, this.url).subscribe(data => {
      console.log(data)
    });
  }
}

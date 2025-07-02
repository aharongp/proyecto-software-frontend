import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form-catalogo',
  templateUrl: './form-catalogo.component.html',
  styleUrls: ['./form-catalogo.component.css']
})
export class FormModificarCatalogoComponent implements OnInit {
  id: string;
  titulo: string;
  url: string;
  description: string;
  clientId: string;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.appService.buscarPagina(this.id).subscribe((data:any) => {
        console.log(data); // <-- revisa aquí
        this.titulo = data.titulo;
        this.url = data.url;
        this.description = data.description;
      });
    });
  }

  updatePage() {
    this.appService.updatePage(this.id, this.titulo, this.description, this.url).subscribe(data => {
      this.router.navigate(['/admin']);
    });
  }
}

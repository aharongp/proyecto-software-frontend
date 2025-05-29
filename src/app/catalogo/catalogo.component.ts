import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  catalogo: any[] = [];

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {
    this.catalogoService.getCatalogo().subscribe(data => {
      this.catalogo = data;
    });
  }
}
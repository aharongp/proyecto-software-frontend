import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form-modificar-usuario',
  templateUrl: './form-modificar-usuario.component.html',
  styleUrls: ['./form-modificar-usuario.component.css']
})
export class FormModificarUsuarioComponent implements OnInit {
  id: string;
  nombre: string;
  email: string;
  rolId: number;
  password: string = ''; // Nuevo campo para la contraseña
  clientID: string;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {this.clientID = localStorage.getItem('userId');}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.appService.getUserById(this.id).subscribe((data: any) => {
        this.nombre = data.nombre;
        this.email = data.email;
        this.rolId = data.rolId;
        this.password = data.password;
        // Por seguridad, no se obtiene la contraseña actual
      });
    });
  }

  updateUsuario() {
    this.appService.updateUsuario(this.id, this.nombre, this.email, this.rolId, this.password).subscribe(data => {
      if(this.id === this.clientID) {
        this.router.navigate(['/landing']);
      }
      else {
        this.router.navigate(['/admin']);
      }
    });
  }
} 
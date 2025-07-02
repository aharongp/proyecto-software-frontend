import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router'; // <-- importa Router

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  pages: any = [];
  users: any = [];
  userId: any;
  userName: string;

  constructor(
    private appService: AppService,
    private router: Router // <-- inyecta Router
  ) {
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('userName');
   }

  ngOnInit(): void {
  this.getUsers();
  this.getpages();
}

  getpages() {
    this.appService.getAllpages().subscribe(data => {
      this.pages = data;
      console.log(data)
    })
  }

  actualizarPage(id: string) {
    this.router.navigate(['/admin/actualizarcatalogo', id]);
  }

  deletePage(id:string){
    this.appService.deletePageById(id).subscribe(response => {
        console.log('Página eliminada:', response);
        this.appService.getAllpages().subscribe(data => {
            this.pages = data;
            console.log('Páginas actualizadas:', data);
        });
    }, error => {
        console.error('Error al eliminar la página:', error);
    });
  }

  deleteUser(id: string) {
    this.appService.deleteUserById(id).subscribe(response => {
      console.log('Usuario eliminado:', response);
      // Recarga la lista de usuarios después de eliminar
      this.getUsers();
    }, error => {
      console.error('Error al eliminar el usuario:', error);
    });
  }

  getUsers() {
    this.appService.getAllusers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }
}

import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any = [];
  

  constructor(private appService: AppService) { }

  ngOnInit():void {
    this.getusers();
  }

  getusers() {
    this.appService.getAllusers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
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

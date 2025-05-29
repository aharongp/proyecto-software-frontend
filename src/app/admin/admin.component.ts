import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
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
}

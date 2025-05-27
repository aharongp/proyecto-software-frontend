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
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string;
  email: string;
  password: string;


  constructor(private appService: AppService) { }

  register() {
    this.appService.register(this. username, this.email, this.password)
      .subscribe((response: any) => {
        console.log(response);

      }, error => {
        console.error(error, 'ocurrio un problema')
      });

  }
}

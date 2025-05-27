import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: string;
  password: string;


  constructor(private appService: AppService) { }

  login() {
    this.appService.login(this.email, this.password)
      .subscribe((response: any) => {
        console.log(response);

      }, error => {
        console.error(error, 'Puede que el email o la contraseña sean incorrectos')
      });

  }
}

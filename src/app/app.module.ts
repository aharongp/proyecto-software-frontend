import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { ServicesProductComponent } from './services-product/services-product.component';
import { OrdersComponentClient } from './client/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { ClientNavComponent } from './shared/client-nav/client-nav.component';
import { OrdersComponentAdmin } from './admin/orders/orders.component';
import { FormComponent } from './client/form/form.component';
import { FormCatalogoComponent } from './admin/form-catalogo/form-catalogo.component';
import { ChatComponent } from './client/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    LoginComponent,
    ServicesProductComponent,
    OrdersComponentClient,
    UsersComponent,
    ClientComponent,
    AdminComponent,
    AdminNavComponent,
    ClientNavComponent,
    OrdersComponentAdmin,
    FormComponent,
    FormCatalogoComponent,
    ChatComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

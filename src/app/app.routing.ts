import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponentClient } from './client/orders/orders.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponentAdmin  as orderAdmin} from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { FormComponent } from './client/form/form.component';
import { FormCatalogoComponent } from './admin/form-catalogo/form-catalogo.component';
import { ChatComponent } from './client/chat/chat.component';
import { FormModificarCatalogoComponent } from './admin/form-modificar-catalogo/form-catalogo.component';
import { FormModificarUsuarioComponent } from './admin/form-modificar-usuario/form-modificar-usuario.component';
import { FormModificarUsuarioClientComponent } from './client/form-modificar-usuario/form-modificar-usuario.component';

const routes: Routes =[
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'client/orders/:id',          component: OrdersComponentClient },
    { path: 'client/createorders/:id',          component: FormComponent },
    { path: 'client/:id',          component: ClientComponent },
    { path: 'admin/orders',          component: orderAdmin },
    { path: 'admin/formcatalogo',          component: FormCatalogoComponent },
    { path: 'admin/users',          component: UsersComponent },
    { path: 'admin',          component: AdminComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'client/chat/:room',          component: ChatComponent },
    { path: 'admin/actualizarcatalogo/:id',          component: FormModificarCatalogoComponent },
    { path: 'admin/actualizarusuario/:id', component: FormModificarUsuarioComponent },
    { path: 'client/modificarusuario/:id', component: FormModificarUsuarioClientComponent },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

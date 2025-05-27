import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesProductComponent } from './services-product/services-product.component';
import { BuyComponent } from './buy/buy.component';
import { ChatComponent } from './client/chat/chat.component';
import { OrdersComponentClient } from './client/orders/orders.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponentAdmin  as orderAdmin} from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';




const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'pricing',          component: PricingComponent },
    { path: 'servicesproducts',          component: ServicesProductComponent },
    { path: 'buy',          component: BuyComponent },
    { path: 'client/chat/:room',          component: ChatComponent },
    { path: 'client/orders/:id',          component: OrdersComponentClient },
    { path: 'client/:id',          component: ClientComponent },
    { path: 'admin/orders',          component: orderAdmin },
    { path: 'admin/users',          component: UsersComponent },
    { path: 'admin',          component: AdminComponent },

    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

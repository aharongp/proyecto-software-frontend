import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponentAdmin {
  orders: any = [];
  user: string;

  constructor(private appService: AppService) {
    this.user = localStorage.getItem('userName')
  }

  ngOnInit():void {
    this.getorders();
  }

  getorders() {
    this.appService.getAllOrders().subscribe(data => {
      this.orders = data;
      console.log(data)
    })
  }
}

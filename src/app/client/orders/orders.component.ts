import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-orders-client',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponentClient {
  orders: any = [];
  userId: any;
  userName: string;

  constructor(private appService: AppService) {
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('userName');
   }

  ngOnInit():void {
    this.getorders();
  }

  getorders() {
    this.appService.getOrdersById(this.userId).subscribe(data => {
      this.orders = data;
      console.log(this.orders)
    })
  }


}

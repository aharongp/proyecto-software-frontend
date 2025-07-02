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

  deleteOrder(id: string) {
    this.appService.deleteOrderById(id).subscribe(response => {
      console.log('Orden eliminada:', response);
      this.getorders();
    }, error => {
      console.error('Error al eliminar la orden:', error);
    });
  }
}

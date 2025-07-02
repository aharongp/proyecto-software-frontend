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

  updateState(id: string, state: string) {
    if (state === 'Pendiente') {
      state = 'En Proceso';
    } else if (state === 'En Proceso') {
      state = 'Completado';
    }

    this.appService.updateOrder(id, state).subscribe(response => {
      console.log('Estado actualizado:', response);
      this.getorders();
    }, error => {
      console.error('Error al actualizar el estado:', error);
    });

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

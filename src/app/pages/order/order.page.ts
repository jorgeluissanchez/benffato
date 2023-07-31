import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
})
export class OrderPage  {

  orders: any[] = [
    {id: 1, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', price: 99.99, quantity: 1},
    {id: 2, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', price: 99.99, quantity: 1},
    {id: 3, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', price: 99.99, quantity: 1},
    {id: 4, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', price: 99.99, quantity: 1},
  ];

  delivery: number = 30;
  subtotal: number = 100;

  cancelOrder(product: any) {
    console.log('cancelOrder', product);
  }
  increment(product: any) {
    console.log('increment', product);
  }
  decrement(product: any) {
    console.log('decrement', product);
  }

}

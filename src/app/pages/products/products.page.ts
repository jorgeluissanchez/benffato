import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
})
export class ProductsPage {
 products: any[] = [
  {id: 1, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', description: 'Descripción del Producto con más de 100 caracteres que por cierto deberias recordar por siempre y para siempre...', price: 99.99, shopIcon: '../../../assets/icons/tienda-icon.svg' },
  {id: 2, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', description: 'Descripción del Producto con más de 100 caracteres que por cierto deberias recordar por siempre y para siempre...', price: 99.99, shopIcon: '../../../assets/icons/tienda-icon.svg' },
  {id: 3, title: 'Título del Producto', subtitle: 'Subtítulo del Producto', description: 'Descripción del Producto con más de 100 caracteres que por cierto deberias recordar por siempre y para siempre...', price: 99.99, shopIcon: '../../../assets/icons/tienda-icon.svg' },
 ];
}

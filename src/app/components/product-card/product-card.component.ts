import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent  {
  @Input() product: any | undefined;
  @Input() cancelOrder: (product: any) => void = () => {};
  @Input() increment: (product: any) => void = () => {};
  @Input() decrement: (product: any) => void = () => {};
}

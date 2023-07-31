import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
})
export class OrderInfoComponent  {
  @Input() subtotal: number = 0;
  @Input() delivery: number = 0;
}

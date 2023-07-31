import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
})
export class ConfirmationPage implements OnInit {

  delivery: number = 30;
  subtotal: number = 100;
  constructor() { }

  ngOnInit() {
  }

}

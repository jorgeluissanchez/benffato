import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent  {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() onChange: (value: string) => void = () => {};
}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
})
export class TextAreaComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() onChange: (value: string) => void = () => {};
}

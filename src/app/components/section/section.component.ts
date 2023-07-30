import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  @Input() title: string = '';
}

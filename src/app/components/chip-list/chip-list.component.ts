import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
})
export class ChipListComponent {
  chips: any[] = [
    { id: 1, name: 'Chip 1 hola', selected: false },
    { id: 2, name: 'Chip 2', selected: false },
    { id: 3, name: 'Chip 3', selected: false },
    { id: 4, name: 'Chip 4', selected: false },
    { id: 5, name: 'Chip 5', selected: false },
  ];

  constructor() {}

  selectChip(chip: any) {
    console.log('chip', this.chips);
  }
}

import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
})

export class ChipComponent {
  @Input() chipInfo: any | undefined;
  @Input() selectChip: (chip: any) => void = () => {};
}

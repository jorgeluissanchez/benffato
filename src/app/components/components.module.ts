import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ChipComponent } from './chip/chip.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [ NavbarComponent, SearchComponent, ChipComponent, ChipListComponent, ProductCardComponent, TextAreaComponent, TextInputComponent, SectionComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ NavbarComponent, SearchComponent, ChipComponent, ChipListComponent, ProductCardComponent, TextAreaComponent, TextInputComponent, SectionComponent ]
})
export class ComponentsModule { }

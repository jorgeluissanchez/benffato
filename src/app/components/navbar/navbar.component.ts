import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() leftIcon: string | undefined;
  @Input() rightIcon: string | undefined;
  @Input() leftLink: string | undefined;
  @Input() rightLink: string | undefined;
}

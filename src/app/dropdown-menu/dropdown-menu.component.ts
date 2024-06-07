import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {


  menuItems: string[] = [
    'BEST SELLER',
    'FOR CASKETS',
    'PLANTS',
    'BOUQUETS',
    'STANDING SPRAYS & WREATHS'
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

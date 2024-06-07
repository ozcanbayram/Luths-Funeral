// logobanner.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-logobanner',
  templateUrl: './logobanner.component.html',
  styleUrls: ['./logobanner.component.css']
})
export class LogobannerComponent {
  menuItems: string[] = [
    'BEST SELLER',
    'FOR CASKETS',
    'PLANTS',
    'BOUQUETS',
    'STANDING SPRAYS & WREATHS'
  ];

}

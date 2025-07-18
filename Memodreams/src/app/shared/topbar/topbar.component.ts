import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterModule,
    MenubarModule,
    ButtonModule,
    NgIf
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'INICIO', routerLink: '/' },
      { label: 'SERVICIOS', routerLink: '/servicios' },
      { label: 'EVENTOS', routerLink: '/eventos' },
      { label: 'GALERÍA', routerLink: '/galeria' },
      { label: 'CONTACTO', routerLink: '/contacto' }
    ];
  }
}

/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public leftMenuItems: Array<MenuItem> = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
  ];
  public centerMenuItems: Array<MenuItem> = [
    { label: 'Pokemons List', icon: 'pi pi-align-justify' },
    { label: 'Colors', icon: 'pi pi-eye-slash' },
  ];
  public rightMenuItems: Array<MenuItem> = [
    { label: 'Exit', icon: 'pi pi-trash' },
  ];

  public activeItem: MenuItem = this.centerMenuItems[0];

  public commonArray = [
    this.leftMenuItems,
    this.centerMenuItems,
    this.rightMenuItems,
  ];
}

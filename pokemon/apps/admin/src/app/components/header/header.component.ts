/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  clickFunc: () => void;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private router: Router) {}

  public leftMenuItems: Array<MenuItem> = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      clickFunc: this.openClientApp.bind(this),
    },
  ];
  public centerMenuItems: Array<MenuItem> = [
    {
      label: 'Pokemons List',
      icon: 'pi pi-align-justify',
      clickFunc: this.openPokemonList.bind(this),
    },
    {
      label: 'Colors',
      icon: 'pi pi-eye-slash',
      clickFunc: this.openColorsList.bind(this),
    },
  ];
  public rightMenuItems: Array<MenuItem> = [
    {
      label: 'Exit',
      icon: 'pi pi-trash',
      clickFunc: this.logout.bind(this),
    },
  ];

  public commonArray = [
    this.leftMenuItems,
    this.centerMenuItems,
    this.rightMenuItems,
  ];

  private openColorsList() {
    console.log(this);
    this.router.navigate(['colors']);
  }

  private openClientApp() {
    console.log('client opened');
  }

  private openPokemonList() {
    this.router.navigate(['pokemons']);
  }

  private logout() {
    console.log('logged out');
  }
}

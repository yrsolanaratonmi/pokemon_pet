import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsListComponent {}

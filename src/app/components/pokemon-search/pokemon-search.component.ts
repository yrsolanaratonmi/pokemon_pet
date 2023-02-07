import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonSearchComponent {}

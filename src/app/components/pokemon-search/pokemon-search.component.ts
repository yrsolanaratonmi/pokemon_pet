import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonSearchComponent {
  public pokemonService = inject(PokemonService);

  public sendSearch(value: string) {
    this.pokemonService.setSearch(value);
  }
}

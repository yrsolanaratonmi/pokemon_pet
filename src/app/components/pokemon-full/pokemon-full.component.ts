import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { SinglePokemonInfo } from '../../dto/singlePokemonInfo.dto';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-full',
  templateUrl: './pokemon-full.component.html',
  styleUrls: ['./pokemon-full.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFullComponent implements OnChanges {
  @Input() name: string;

  public singlePokemon: SinglePokemonInfo;

  constructor(private pokemonService: PokemonService, private ref: ChangeDetectorRef) {}

  ngOnChanges(): void {
    if (this.name) {
      this.pokemonService
        .getSinglePokemon('https://pokeapi.co/api/v2/pokemon/' + this.name)
        .pipe(tap(() => this.ref.markForCheck()))
        .subscribe((res) => {
          this.singlePokemon = res;
          console.log(res);
        });
    }
  }
}

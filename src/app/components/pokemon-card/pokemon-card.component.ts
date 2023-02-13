import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { PokemonTypes } from '../../dto/pokemonTypes';
import { SinglePokemonInfo } from '../../dto/singlePokemonInfo.dto';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PokemonCardComponent {
  @Input() pokemon: SinglePokemonInfo;

  @Input() set activePokemon(value: string) {}

  @Output() clickFunc = new EventEmitter<string>();

  public pokemonTypes: any = PokemonTypes;

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }
}

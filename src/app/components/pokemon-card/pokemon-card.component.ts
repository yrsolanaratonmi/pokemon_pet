import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SinglePokemonInfo } from '../../dto/singlePokemonInfo.dto';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon: SinglePokemonInfo;

  @Output() clickFunc = new EventEmitter<string>();

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }
}

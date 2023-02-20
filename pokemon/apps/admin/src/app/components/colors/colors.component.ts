import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { PokemonTypes } from '../../../../../../libs/dto/pokemonTypes.dto';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ColorsComponent {
  public colors = Object.entries(PokemonTypes);

  public setColor(type: string, color: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    PokemonTypes[type] = color;
    console.log(PokemonTypes);
  }
}

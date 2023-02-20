/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { SinglePokemonInfo } from '../../../../../libs/dto/singlePokemonInfo.dto';

@Pipe({
  name: 'filterPokemon',
})
export class FilterPokemonPipe implements PipeTransform {
  transform(
    value: Array<SinglePokemonInfo>,
    filterString: string
  ): Array<SinglePokemonInfo> {
    if (!filterString) return value;
    return value.filter((el: SinglePokemonInfo) =>
      el.name.includes(filterString)
    );
  }
}

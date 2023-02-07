/* eslint-disable import/named */
import { Pipe, PipeTransform } from '@angular/core';
import { SinglePokemonInfo } from '../dto/singlePokemonInfo.dto';

@Pipe({
  name: 'filterPokemon',
})
export class FilterPokemonPipe implements PipeTransform {
  transform(value: any, filterString: string): Array<SinglePokemonInfo> {
    if (!filterString) return value;
    return value.filter((el: any) => el.name.includes(filterString));
  }
}

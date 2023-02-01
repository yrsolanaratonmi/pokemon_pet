import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseLetter',
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value[0].toUpperCase() + value.slice(1, value.length);
  }
}

/* eslint-disable import/named */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { map, tap } from 'rxjs';
import { SinglePokemonInfo } from '../../dto/singlePokemonInfo.dto';
import { AllPokemonsData } from '../../dto/allPokemonsData.dto';
import { PokemonService } from '../../services/pokemon.service';
import { UnifiedResponse } from '../../dto/unifiedResponse.dto';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private ref: ChangeDetectorRef) {}

  public pokemons: Array<SinglePokemonInfo> = [];

  public startElement: number = 0;

  public rows: number = 9;

  public activePokemon: string = '';

  @Output() clickFunc = new EventEmitter<string>();

  ngOnInit(): void {
    this.pokemonService
      .getPokemons()
      .pipe(
        map((pokemonsData: AllPokemonsData) => {
          pokemonsData.results.forEach((el: UnifiedResponse) => {
            this.pokemonService
              .getSinglePokemon(el.url)
              .pipe(tap(() => this.ref.markForCheck()))
              .subscribe((res) => {
                this.pokemons.push(res);
              });
          });
        }),
      )
      .subscribe();
  }

  public paginate(event: any) {
    console.log(event);
    this.rows = event.rows;
    this.startElement = event.first * event.rows;
  }

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }

  public setActive(name: string) {
    this.activePokemon = name;
  }
}

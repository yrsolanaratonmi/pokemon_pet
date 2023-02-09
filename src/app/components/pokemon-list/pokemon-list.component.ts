/* eslint-disable import/named */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AllPokemonsData } from '../../dto/allPokemonsData.dto';
import { SinglePokemonInfo } from '../../dto/singlePokemonInfo.dto';
import { UnifiedResponse } from '../../dto/unifiedResponse.dto';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  constructor(public pokemonService: PokemonService, private ref: ChangeDetectorRef) {}

  public pokemons: Array<SinglePokemonInfo> = [];

  public startElement: number = 0;

  public searchValue$: Observable<any>;

  public activePokemon: string = '';

  public loader: boolean = false;

  @Output() clickFunc = new EventEmitter<string>();

  ngOnInit(): void {
    this.loader = true;
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
      .subscribe(() => (this.loader = false));
    this.searchValue$ = this.pokemonService.search$;
  }

  public paginate(event: any) {
    this.startElement = event.first;
  }

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }

  public setActive(name: string) {
    this.activePokemon = name;
  }
}

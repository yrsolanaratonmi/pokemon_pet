/* eslint-disable import/named */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, map, Subject, tap } from 'rxjs';
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

  public searchValue$: Subject<string> = new Subject();

  public activePokemon: string = '';

  public loader: boolean = false;

  private constantPokemons: Array<SinglePokemonInfo> = [];

  @Output() clickFunc = new EventEmitter<string>();

  ngOnInit(): void {
    fromEvent(document.querySelector('input'), 'input').subscribe((event: any) =>
      this.searchValue$.next(event.target.value),
    );
    this.searchValue$.subscribe((res) => this.filterPokemons(res));
    this.setPokemons();
  }

  public paginate(event: any) {
    this.startElement = event.first;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }

  public setActive(name: string) {
    this.activePokemon = name;
  }

  private setPokemons() {
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
                this.constantPokemons.push(res);
              });
          });
        }),
      )
      .subscribe(() => (this.loader = false));
  }

  private filterPokemons(searchString: string) {
    this.pokemons = this.constantPokemons;
    this.loader = true;
    this.pokemons = this.pokemons.filter((el) => el.name.includes(searchString));
    this.loader = false;
    this.ref.detectChanges();
  }
}

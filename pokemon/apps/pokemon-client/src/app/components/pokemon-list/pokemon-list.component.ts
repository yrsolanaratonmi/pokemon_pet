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
<<<<<<< HEAD:pokemon/apps/pokemon-client/src/app/components/pokemon-list/pokemon-list.component.ts
  constructor(
    public pokemonService: PokemonService,
    private ref: ChangeDetectorRef
  ) {}
=======
  constructor(public pokemonService: PokemonService, private ref: ChangeDetectorRef) {}
>>>>>>> bff864b184adeef7796ce66a856a4f8a5cddad30:src/app/components/pokemon-list/pokemon-list.component.ts

  public pokemons: Array<SinglePokemonInfo> = [];

  public startElement: number = 0;

  public rows: number = 21;

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
        })
      )
      .subscribe(() => (this.loader = false));
    this.searchValue$ = this.pokemonService.search$;
  }

  public paginate(event: any) {
    this.rows = event.rows;
    this.startElement = event.first * event.rows;
  }

  public setIndex(name: string) {
    this.clickFunc.emit(name);
  }

  public setActive(name: string) {
    this.activePokemon = name;
  }

  private filterPokemons(searchString: string) {
    this.pokemons = this.constantPokemons;
    this.loader = true;
    this.pokemons = this.pokemons.filter((el) =>
      el.name.includes(searchString)
    );
    this.loader = false;
    this.ref.detectChanges();
  }
}

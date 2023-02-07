/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AllPokemonsData } from '../dto/allPokemonsData.dto';
import { SinglePokemonInfo } from '../dto/singlePokemonInfo.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private baseURL = 'https://pokeapi.co/api/v2/';

  public search$: Subject<string> = new Subject();

  public getPokemons(): Observable<AllPokemonsData> {
    return this.http.get<AllPokemonsData>(this.baseURL + 'pokemon?limit=1279');
  }

  public getSinglePokemon(name: string): Observable<SinglePokemonInfo> {
    return this.http.get<SinglePokemonInfo>(name);
  }

  public setSearch(value: string) {
    this.search$.next(value);
  }
}

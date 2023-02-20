/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPokemonsData } from '../../../../../libs/dto/allPokemonsData.dto';
import { SinglePokemonInfo } from '../../../../../libs/dto/singlePokemonInfo.dto';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  private baseURL = 'https://pokeapi.co/api/v2/';

  public getPokemons(): Observable<AllPokemonsData> {
    return this.http.get<AllPokemonsData>(this.baseURL + 'pokemon?limit=1279');
  }

  public getSinglePokemon(name: string): Observable<SinglePokemonInfo> {
    return this.http.get<SinglePokemonInfo>(name);
  }
}

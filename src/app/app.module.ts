/* eslint-disable import/no-extraneous-dependencies */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { ChipModule } from 'primeng/chip';
import { PaginatorModule } from 'primeng/paginator';
import { PokemonFullComponent } from './components/pokemon-full/pokemon-full.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent, UpperCasePipe, PokemonFullComponent],
  imports: [BrowserModule, HttpClientModule, ButtonModule, CardModule, ChipModule, PaginatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

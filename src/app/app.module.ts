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
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/pokemon-full/carousel/carousel.component';
import { TagModule } from 'primeng/tag';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    UpperCasePipe,
    PokemonFullComponent,
    CarouselComponent,
    PokemonSearchComponent,
    FilterPokemonPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    ChipModule,
    PaginatorModule,
    CarouselModule,
    InputTextModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

<<<<<<< HEAD:pokemon/apps/pokemon-client/src/app/app.module.ts
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
=======
/* eslint-disable import/no-extraneous-dependencies */
import { CommonModule } from '@angular/common';
>>>>>>> 27de4b3 (Revert "good refactor"):src/app/app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { AppComponent } from './app.component';
<<<<<<< HEAD:pokemon/apps/pokemon-client/src/app/app.module.ts
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CarouselComponent } from './components/pokemon-full/carousel/carousel.component';
import { PokemonFullComponent } from './components/pokemon-full/pokemon-full.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
=======
import { CarouselComponent } from './components/pokemon-full/carousel/carousel.component';
import { PokemonFullComponent } from './components/pokemon-full/pokemon-full.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
>>>>>>> 27de4b3 (Revert "good refactor"):src/app/app.module.ts
import { MultipleRenderDirective } from './directives/multiple-render.directive';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';
import { UpperCasePipe } from './pipes/upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    UpperCasePipe,
    PokemonFullComponent,
    CarouselComponent,
    FilterPokemonPipe,
    MultipleRenderDirective,
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
    CommonModule,
    InputTextModule,
    TagModule,
    SkeletonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

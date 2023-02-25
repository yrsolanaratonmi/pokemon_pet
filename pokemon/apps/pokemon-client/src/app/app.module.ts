import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CarouselComponent } from './components/pokemon-full/carousel/carousel.component';
import { PokemonFullComponent } from './components/pokemon-full/pokemon-full.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
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
    BrowserAnimationsModule,
    ChartModule,
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
    DialogModule,
    InputTextModule,
    TagModule,
    SkeletonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

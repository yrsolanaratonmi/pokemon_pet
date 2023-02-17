import { Route } from '@angular/router';
import { ColorsComponent } from './components/colors/colors.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'colors', component: ColorsComponent },
];

import { Route } from '@angular/router';
import { ColorsComponent } from './components/colors/colors.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'colors', component: ColorsComponent },
];

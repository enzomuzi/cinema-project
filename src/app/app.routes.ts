import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { TelaLoginComponent } from './screens/tela-login/tela-login.component';
import { FilmesCartazComponent } from './screens/filmes-cartaz/filmes-cartaz.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: TelaLoginComponent,
  },
  {
    path: 'cartaz',
    component: FilmesCartazComponent,
    // loadChildren: () =>
    //   import('./modules/films/films.module').then((m) => m.FilmsModule),
  },
];

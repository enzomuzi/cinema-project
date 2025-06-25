import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { TelaLoginComponent } from './screens/tela-login/tela-login.component';
import { FilmesCartazComponent } from './screens/filmes-cartaz/filmes-cartaz.component';
import { PainelAdminComponent } from './screens/painel-admin/painel-admin.component';
import { FilmsFormComponent } from './components/films-form/films-form.component';
import { FilmResolver } from './guards/film.resolver';
import { TelaRegisterComponent } from './screens/tela-register/tela-register.component';

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
    path: 'register',
    component: TelaRegisterComponent,
  },
  {
    path: 'cartaz',
    component: FilmesCartazComponent,
  },
  {
    path: 'admin',
    component: PainelAdminComponent,
  },
  {
    path: 'admin/new',
    component: FilmsFormComponent,
    resolve: {
      film: FilmResolver,
    },
  },
  {
    path: 'admin/edit/:id',
    component: FilmsFormComponent,
    resolve: {
      film: FilmResolver,
    },
  },
];

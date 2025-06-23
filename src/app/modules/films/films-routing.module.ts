import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesCartazComponent } from '../../screens/filmes-cartaz/filmes-cartaz.component';

const routes: Routes = [
  {
    path: '',
    component: FilmesCartazComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}

import { Films } from './../modules/model/films';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { FilmesCartazService } from '../services/filmes-cartaz.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilmResolver implements Resolve<Films> {

  constructor(private readonly service: FilmesCartazService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Films> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', name: '', language: '', hours: '', img: '' });
  }
}

import { Injectable } from '@angular/core';
import { Films } from '../modules/model/films';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesCartazService {
  private readonly API = 'api/films';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Films[]>(this.API).pipe(
      first(),
      delay(1000),
      tap((films) => console.log(films))
    );
  }

  save(record: Films) {
    return this.httpClient.post<Films>(this.API, record);
  }
}

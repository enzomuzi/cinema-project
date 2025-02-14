import { Injectable } from '@angular/core';
import { Films } from '../modules/model/films';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesCartazService {
  private readonly API = 'api/films';

  constructor(private readonly httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Films[]>(this.API).pipe(
      first(),
      delay(1000),
      tap((films) => console.log(films))
    );
  }

  loadById(id: string): Observable<Films> {
    return this.httpClient.get<Films>(`${this.API}/${id}`);
  }
  
  save(record: Films) {
    return this.httpClient.post<Films>(this.API, record);
  }

  edit(record: Films) {
    return this.httpClient.put<Films>(this.API, record);
  }
}

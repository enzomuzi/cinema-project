import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmsRoutingModule } from '../../modules/films/films-routing.module';
import { Films } from '../../modules/model/films';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FilmesCartazService } from '../../services/filmes-cartaz.service';
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorPopupComponent } from '../../components/error-popup/error-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filmes-cartaz',
  imports: [
    MatToolbarModule,
    CommonModule,
    FilmsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './filmes-cartaz.component.html',
  styleUrl: './filmes-cartaz.component.css',
  host: { ngSkipHydration: 'true' },
})
export class FilmesCartazComponent implements OnInit {
  films$: Observable<Films[]>;

  displayedColumns = ['name', 'language', 'hours', 'img'];

  constructor(
    private filmesCartazService: FilmesCartazService,
    public dialog: MatDialog
  ) {
    this.films$ = this.filmesCartazService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao localizar filmes.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorPopupComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  film = {
    img: '{{film.img}}',
  };
}

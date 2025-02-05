import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmsRoutingModule } from '../../modules/films/films-routing.module';
import { Films } from '../../modules/model/films';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FilmesCartazService } from '../../services/filmes-cartaz.service';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  ],
  templateUrl: './filmes-cartaz.component.html',
  styleUrl: './filmes-cartaz.component.css',
  host: { ngSkipHydration: 'true' },
})
export class FilmesCartazComponent {
  films$: Observable<Films[]>;

  displayedColumns = ['name', 'description', 'hours'];
  // dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private filmesCartazService: FilmesCartazService) {
    this.films$ = this.filmesCartazService.list();
  }

  ngOnInit(): void {}
}

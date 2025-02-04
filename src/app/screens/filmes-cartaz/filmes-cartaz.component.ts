import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmsRoutingModule } from '../../modules/films/films-routing.module';
import { Films } from '../../modules/model/films';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-filmes-cartaz',
  imports: [MatToolbarModule, CommonModule, FilmsRoutingModule, MatTableModule],
  templateUrl: './filmes-cartaz.component.html',
  styleUrl: './filmes-cartaz.component.css',
  host: { ngSkipHydration: 'true' },
})
export class FilmesCartazComponent {
  films: Films[] = [
    { _id: '1', name: 'Peter Pan', description: 'filme', hours: '15h43' },
  ];

  displayedColumns = ['name', 'description', 'hours'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Films>(this.films);
  }
}

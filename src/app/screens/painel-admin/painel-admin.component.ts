import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { ErrorPopupComponent } from '../../components/error-popup/error-popup.component';
import { Films } from '../../modules/model/films';
import { FilmesCartazService } from '../../services/filmes-cartaz.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.css',
})
export class PainelAdminComponent {
  films$: Observable<Films[]>;

  displayedColumns = ['name', 'description', 'hours'];

  // dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private filmesCartazService: FilmesCartazService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnInit(): void {}
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.css',
})
export class PainelAdminComponent implements OnInit {
  films$: Observable<Films[]>;
  form: FormGroup;

  @Input() films: Films[] = [];
  @Output() add = new EventEmitter<Films>();
  @Output() edit = new EventEmitter<Films>();
  @Output() delete = new EventEmitter<Films>();

  displayedColumns = ['name', 'language', 'hours', 'img'];

  // dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly filmesCartazService: FilmesCartazService,
    private readonly service: FilmesCartazService,
    private readonly snackBar: MatSnackBar,
    public dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.films$ = this.filmesCartazService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao localizar filmes.');
        return of([]);
      })
    );
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      language: [''],
      hours: [''],
      img: [''],
    });
  }

  film = {
    img: '{{film.img}}',
  };

  onError(errorMsg: string) {
    this.dialog.open(ErrorPopupComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(film: Films) {
    this.router.navigate(['edit', film.id], { relativeTo: this.route });
  }


  onDelete(film: Films) {
    this.onSent(film);
    // this.service.delete(film.id).subscribe({
    //   next: () => this.onSent(),
    //   error: () => this.onError('Erro ao excluir filme.'),
    // });
  }

  onSent(film: Films) {
    let deleteFilm = this.snackBar.open('Tem certeza que deseja excluir o filme?', 'Excluir', {
      duration: 5000
    });
  
    deleteFilm.onAction().subscribe(() => {
      this.handleSnackbarAction(film);
    });
  }

  handleSnackbarAction(film: Films) {
    this.service.delete(film.id).subscribe({
      next: () => this.snackBar.open('Filme removido do banco de dados.', 'Fechar', { duration: 3000 }),
      error: () => this.onError('Erro ao excluir filme.'),
    });
  }
  
  
}

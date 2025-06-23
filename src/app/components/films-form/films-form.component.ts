import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FilmesCartazService } from '../../services/filmes-cartaz.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from '../../modules/model/films';

@Component({
  selector: 'app-films-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  templateUrl: './films-form.component.html',
  styleUrl: './films-form.component.css',
})
export class FilmsFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: FilmesCartazService,
    private readonly snackBar: MatSnackBar,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      language: [''],
      hours: [''],
      img: [''],
    });
  }

  ngOnInit(): void {
    const film: Films = this.route.snapshot.data['film'];
    this.form.setValue({
      id: film.id,
      name: film.name,
      language: film.language,
      hours: film.hours,
      img: film.img,
    })

  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe({
        next: (data) => this.onSent(),
        error: () => this.onError(),
      });
    } else {
      this.snackBar.open('Preencha todos os campos corretamente.', 'Fechar', {
        duration: 3000,
      });
    }
    
  }


  onCancel() {
    this.snackBar.open('Operação cancelada.', 'Fechar', { duration: 3000 });
    this.form.reset();
    this.router.navigate(['/admin']);
  }

  onSent() {
    this.snackBar.open('Filme salvo com sucesso.', 'Fechar', { duration: 3000 });
    this.form.reset();
    this.router.navigate(['/admin']);
  }

  private onError() {
    this.snackBar.open('Erro ao salvar filme.', 'Fechar', { duration: 3000 });
    this.router.navigate(['/admin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardActions } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { FilmesCartazService } from '../../services/filmes-cartaz.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-films-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCard,
    MatToolbar,
    MatCardActions,
    MatSnackBarModule,
  ],
  templateUrl: './films-form.component.html',
  styleUrl: './films-form.component.css',
})
export class FilmsFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private service: FilmesCartazService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      language: [null],
      hours: [null],
      img: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => console.log(data),
      (error) => this.onError()
    );
  }

  onCancel() {
    console.log('cancelou');
  }

  private onError() {
    this.snackBar.open('Erro ao salvar filme.');
  }
}

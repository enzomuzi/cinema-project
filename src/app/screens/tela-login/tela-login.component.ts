import { Component } from '@angular/core';
import { LayoutLoginComponent } from '../../components/layout-login/layout-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tela-login',
  imports: [
    LayoutLoginComponent,
    ReactiveFormsModule,
    InputPrimaryComponent
  ],
  providers: [
    TelaLoginComponent
  ],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastService.success('Login realizado com sucesso', 'Bem-vindo!');
        this.router.navigate(['/cartaz']);
      },
      error: () => this.toastService.error('Erro ao fazer login', 'Tente novamente'),
    });
    console.log(this.loginForm.value);
  }
  navigate() {
    this.router.navigate(['/cadastro']);
  }
}

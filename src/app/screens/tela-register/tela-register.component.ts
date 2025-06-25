import { Component } from '@angular/core';
import { LayoutLoginComponent } from '../../components/layout-login/layout-login.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimaryComponent } from '../../components/input-primary/input-primary.component';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tela-register',
  imports: [
    LayoutLoginComponent,
    ReactiveFormsModule,
    InputPrimaryComponent
  ],
  providers: [
    RegisterService,
  ],
  templateUrl: './tela-register.component.html',
  styleUrl: './tela-register.component.css'
})
export class TelaRegisterComponent {
  registerForm!: FormGroup;

  passwordsMatchValidator(group: AbstractControl): { [key: string]: any } | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('passwordConfirm')?.value;
  return password === confirmPassword ? null : { passwordsMismatch: true };
}

  constructor(
  private router: Router,
  private registerService: RegisterService,
  private toastService: ToastrService
) {
  this.registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('USER', [Validators.required])
    },
    { validators: this.passwordsMatchValidator }
  );
}


  submit() {
    this.registerService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.role).subscribe({
      next: () => {
        this.toastService.success('Registro realizado com sucesso', 'Bem-vindo!');
        this.router.navigate(['/cartaz']);
      },
      error: () => this.toastService.error('Erro ao registrar', 'Tente novamente'),
    });
  }
  navigate() {
    this.router.navigate(['/register']);
  }
}

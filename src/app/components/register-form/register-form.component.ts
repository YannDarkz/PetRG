import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaskCpfDirective } from '../../directives/mask-cpf/mask-cpf.directive';
import { cpfValidator } from '../../validators/cpf-validators';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaskCpfDirective],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})

export class RegisterFormComponent {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      // Dados da primeira etapa: "Dados Pessoais"
      personalData: this.fb.group({
        name: ['', Validators.required],
        surname:['', Validators.required ],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, ]],
        birth: ['', Validators.required ]
      }),

      // Dados da segunda etapa: "Dados do Pet"
      petData: this.fb.group({
        petName: ['', Validators.required],
        species: ['', Validators.required],
        birthPet: ['', Validators.required],
        gender: ['', Validators.required]
      }),

      // Dados da terceira etapa: "Dados senha"
      passwordData: this.fb.group({
        password: ['', Validators.required, Validators.minLength(8)],
        passwordConfirm: ['', Validators.required],
        termsOfUse: [false, Validators.requiredTrue]
      })
    });
  }


  onSubmit(): void {

  }

}

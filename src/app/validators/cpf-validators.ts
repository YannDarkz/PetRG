import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const cpfValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    const cpf = control.value;
    return cpf && /^\d{11}$/.test(cpf) ? null : { invalidCpf: true };
};
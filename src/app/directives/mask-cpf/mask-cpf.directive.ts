import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaskCpf]',
  standalone: true
})
export class MaskCpfDirective {

  private readonly maxLength = 11;

  constructor() { }

  @HostListener('input', ['$event'])
  inInputChange(event: Event): void {
    console.log('mas cpf');
    
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if(value.length > this.maxLength) {
      value = value.substring(0, this.maxLength)      
    }

    if( value.length > 3 && value.length <= 6) {
      value = value.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (value.length > 6 && value.length <= 9) {
      value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    input.value = value
  }

  // @HostListener('keydown', ['$event'])
  // onKeypress(event: KeyboardEvent): void {
  //   const input = event.target as HTMLInputElement;
  //   const value = input.value.replace(/\D/g, '');

  //   if( value.length >= this.maxLength && !['Backspace', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
  //     event.preventDefault();
  //     console.log('Limite de CPF alcançado');
      

  //   }
  // }

}

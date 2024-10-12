import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RegisterFormComponent } from './components/register-form/register-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'petRG';
}

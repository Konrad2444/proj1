import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    console.log('Username before login:', this.formData.username);
    console.log('Password before login:', this.formData.password);

    if (this.formData.username === 'exampleUser' && this.formData.password === 'validPassword') {
      this.errorMessage = '';
      this.authService.login();
      console.log('Zalogowano pomyślnie');
      // Przekieruj na dashboard po zalogowaniu
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Błąd logowania. Sprawdź dane.';
      console.log('Błąd logowania. Sprawdź dane.');
    }

    console.log('Error message after login attempt:', this.errorMessage);
  }
}

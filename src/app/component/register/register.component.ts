import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';  // Import the service

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'Пароли не совпадают';
      return;
    }

    // Call the AuthService to register the user
    this.authService.registerUser(this.registerData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']); // Navigate to login page after successful registration
      },
      (error) => {
        this.errorMessage = 'Ошибка регистрации. Попробуйте еще раз.';
        console.error('Error during registration:', error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

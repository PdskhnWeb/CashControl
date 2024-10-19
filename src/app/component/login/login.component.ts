import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.loginUser(this.loginData.username, this.loginData.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Navigate to your dashboard or homepage
      },
      (error) => {
        this.errorMessage = 'Неверные учетные данные.';
        console.error('Login error:', error);
      }
    );
  }

  GoToHome() {
    this.router.navigate(['/dashboard']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

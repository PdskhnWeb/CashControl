import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-backend-api.com/register'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  // Method to send registration data to the backend (or use localStorage for now)
  registerUser(userData: any): Observable<any> {
    // Uncomment this when you have a backend:
    // return this.http.post(this.apiUrl, userData);
    
    // Local storage logic (temporary)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    return new Observable((observer) => {
      observer.next({ success: true, message: 'User registered successfully!' });
      observer.complete();
    });
  }

  // Simulated login method
  loginUser(username: string, password: string): Observable<any> {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    
    if (user) {
      return new Observable((observer) => {
        observer.next({ success: true, message: 'Login successful!' });
        observer.complete();
      });
    } else {
      return new Observable((observer) => {
        observer.error({ success: false, message: 'Invalid credentials!' });
        observer.complete();
      });
    }
  }
}

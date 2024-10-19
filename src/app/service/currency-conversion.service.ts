import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConversionService {
  private apiUrl: string = 'http://localhost:3000/convert'; // Адрес вашего бэкенда

  constructor(private http: HttpClient) {}

  // Метод для конвертации суммы с бэкенда
  convertCurrency(amount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?amount=${amount}`);
  }
}
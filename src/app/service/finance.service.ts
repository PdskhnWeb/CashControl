import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  constructor() {
    this.loadTransactions();
  }

  // Добавление новой транзакции
  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.saveTransactions();
  }

  // Получение всех транзакций
  getTransactions(): Transaction[] {
    return this.transactions;
  }

  // Удаление транзакции по id
  deleteTransaction(id: number) {
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.saveTransactions();
  }

  // Сохранение в LocalStorage
  private saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

  // Загрузка из LocalStorage
  private loadTransactions() {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      this.transactions = JSON.parse(storedTransactions);
    }
  }
}

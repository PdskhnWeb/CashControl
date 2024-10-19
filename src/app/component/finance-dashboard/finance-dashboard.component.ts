import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description: string;
}

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {
  transactions: Transaction[] = [];
  balance: number = 0;
  currentCurrency: string = 'RUB'; // Валюта по умолчанию - рубли
  exchangeRates: { [key: string]: number } = {
    'RUB': 1,
    'USD': 0.01,
    'EUR': 0.009,
  };

  constructor(private router: Router) {
    this.loadTransactions();
  }

  ngOnInit(): void {
    // Удаляем ошибку по умолчанию
  }

  // Метод для изменения текущей валюты
  onCurrencyChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  if (selectElement) {
    this.currentCurrency = selectElement.value;
    this.balance = this.calculateBalance(); // Пересчитываем баланс после смены валюты
  }
}

  // Добавляем транзакцию и сохраняем обновленные данные в localStorage
  addTransaction(type: string, category: string, amount: number, description: string) {
    const transactionType: 'income' | 'expense' = type as 'income' | 'expense';

    const newTransaction: Transaction = {
      id: this.transactions.length + 1,
      type: transactionType,
      category,
      amount,
      description,
    };

    this.transactions.push(newTransaction);
    this.balance = this.calculateBalance();
    this.saveTransactions();  // Сохраняем транзакции после добавления
  }

  // Метод для расчета баланса
  calculateBalance(): number {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === 'income') {
        totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
        totalExpenses += transaction.amount;
      }
    }

    // Возвращаем баланс в зависимости от выбранной валюты
    const balanceInRub = totalIncome - totalExpenses;
    return balanceInRub * this.exchangeRates[this.currentCurrency];
  }

  // Метод для перехода на страницу истории транзакций
  viewTransactionHistory() {
    this.router.navigate(['/history'], { state: { transactions: this.transactions } });
  }

  // Сохраняем транзакции в localStorage
  saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
    localStorage.setItem('balance', JSON.stringify(this.balance));
  }

  // Загружаем транзакции из localStorage
  loadTransactions() {
    const savedTransactions = localStorage.getItem('transactions');
    const savedBalance = localStorage.getItem('balance');

    if (savedTransactions) {
      this.transactions = JSON.parse(savedTransactions);
    }

    if (savedBalance) {
      this.balance = JSON.parse(savedBalance);
    }
  }
}

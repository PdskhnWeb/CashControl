import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  transactions: any[] = [];

  constructor(private router: Router) {
    // Получаем транзакции через state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.transactions = navigation.extras.state['transactions'];
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

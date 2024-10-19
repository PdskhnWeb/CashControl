import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceDashboardComponent } from './component/finance-dashboard/finance-dashboard.component';
import { TransactionHistoryComponent } from './component/transaction-history/transaction-history.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FinanceDashboardComponent },
  { path: 'history', component: TransactionHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

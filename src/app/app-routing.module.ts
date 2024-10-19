import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceDashboardComponent } from './component/finance-dashboard/finance-dashboard.component';
import { TransactionHistoryComponent } from './component/transaction-history/transaction-history.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './component/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FinanceDashboardComponent },
  { path: 'history', component: TransactionHistoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

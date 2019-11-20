import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './areas/auth/register/register.component';
import { LoginComponent } from './areas/auth/login/login.component';
import { AuthguardGuard } from './guards/authguard.guard'
import { from } from 'rxjs';
import { EmailverificationComponent } from './areas/auth/emailverification/emailverification.component';
import { ForgotpasswordComponent } from './areas/auth/forgotpassword/forgotpassword.component';
import { HomeComponent } from './areas/globalpages/home/home.component';
import { DashboardComponent } from './areas/banking/dashboard/dashboard/dashboard.component';
import { PersonalDetailsComponent } from './areas/banking/personal-details/personal-details.component';
import { AddMoneyComponent } from './areas/banking/add-money/add-money.component';
import { SendMoneyComponent } from './areas/banking/send-money/send-money.component';
import { CheckBalanceComponent } from './areas/banking/check-balance/check-balance.component';
import { ResetpasswordComponent } from './areas/auth/resetpassword/resetpassword.component';
import { AnonymousGuard } from './guards/anonymous.guard';
import { UserorderComponent } from './areas/banking/user-order/userorder/userorder.component';
//import {UserorderframeComponent } from './areas/banking/user-order/userorderframe/userorderframe.component';
import { TransactionHistoryComponent } from './areas/banking/transaction-history/transaction-history.component';
import { LinkAccountComponent } from './areas/banking/link-account/link-account.component';
import { ChangePasswordComponent } from './areas/banking/change-password/change-password.component';
import { BankserviceComponent } from './areas/banking/bankservice/bankservice.component';
import { BankcontactComponent } from './areas/banking/bankcontact/bankcontact.component';
import { TestComponent } from './areas/auth/test/test.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AnonymousGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard] },
  { path: 'resetpass', component: ResetpasswordComponent },
  { path: 'verify', component: EmailverificationComponent },
  { path: 'forgotpass', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },
  { path: 'person-detail', component: PersonalDetailsComponent, canActivate: [AuthguardGuard] },

  { path: 'add-money', component: AddMoneyComponent, canActivate: [AuthguardGuard] },
  { path: 'send-money', component: SendMoneyComponent, canActivate: [AuthguardGuard] },
  { path: 'check-balance', component: CheckBalanceComponent, canActivate: [AuthguardGuard] },
  { path: 'tansaction', component: TransactionHistoryComponent, canActivate: [AuthguardGuard] },
  { path: 'userorder', component: UserorderComponent },
  // {path:'userframe',component:UserorderframeComponent},
  { path: 'linkaccount', component: LinkAccountComponent },
  { path: 'changepass', component: ChangePasswordComponent, canActivate: [AuthguardGuard] },
  { path: 'bankservice', component: BankserviceComponent, canActivate: [AuthguardGuard] },
  { path: 'bankcontact', component: BankcontactComponent, canActivate: [AuthguardGuard] },
  {path:'testtable',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

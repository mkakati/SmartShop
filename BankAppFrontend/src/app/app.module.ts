import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import { ToastrModule} from 'ngx-toastr';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {JwtModule} from '@auth0/angular-jwt';
import {UserIdleModule } from 'angular-user-idle'
import {NgxMaskModule} from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './areas/auth/login/login.component';
import { RegisterComponent } from './areas/auth/register/register.component';
import { ForgotpasswordComponent } from './areas/auth/forgotpassword/forgotpassword.component';
import { EmailverificationComponent } from './areas/auth/emailverification/emailverification.component';
import { from } from 'rxjs';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HomeComponent } from './areas/globalpages/home/home.component';
import { DashboardComponent } from './areas/banking/dashboard/dashboard/dashboard.component';
import { PersonalDetailsComponent } from './areas/banking/personal-details/personal-details.component';
import { CheckBalanceComponent } from './areas/banking/check-balance/check-balance.component';
import { TransactionHistoryComponent } from './areas/banking/transaction-history/transaction-history.component';
import { SendMoneyComponent } from './areas/banking/send-money/send-money.component';
import { AddMoneyComponent } from './areas/banking/add-money/add-money.component';
import { GlobalHeaderComponent } from './areas/globalpages/global-header/global-header.component';
import { GlobalFooterComponent } from './areas/globalpages/global-footer/global-footer.component';
import{OnlyNumber} from './shared/_directives/onlynumber/OnlyNumber';
import { ResetpasswordComponent } from './areas/auth/resetpassword/resetpassword.component'
import {MatMenuModule} from '@angular/material/menu';
import { InterceptorService } from './services/Interceptor/interceptor.service';
import {UserorderComponent} from './areas/banking/user-order/userorder/userorder.component';
import { LinkAccountComponent } from './areas/banking/link-account/link-account.component';
import { ChangePasswordComponent } from './areas/banking/change-password/change-password.component';
//import { OnlyNumber } from '../app/_helpers/Directive/OnlyNumber';
//import { ActivatedRoute } from "@angular/router";
import {CheckboxModule} from 'primeng/checkbox';
import { NgxSpinnerModule } from "ngx-spinner";
import { BankserviceComponent } from './areas/banking/bankservice/bankservice.component';
import { BankcontactComponent } from './areas/banking/bankcontact/bankcontact.component';
import { TestComponent } from './areas/auth/test/test.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserorderComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    EmailverificationComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    PersonalDetailsComponent,
    CheckBalanceComponent,
    TransactionHistoryComponent,
    SendMoneyComponent,
    AddMoneyComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,OnlyNumber, ResetpasswordComponent, LinkAccountComponent, ChangePasswordComponent, BankserviceComponent, BankcontactComponent, TestComponent, 
  ],
  imports: [
    BrowserModule,
   // ActivatedRoute,
   CheckboxModule,
   MatFormFieldModule,
   MatInputModule,
    JwtModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    TextMaskModule,
    TabMenuModule,
    MenuModule,MatSidenavModule,
    SidebarModule,
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120}),
    MatMenuModule,
    AccordionModule,ReactiveFormsModule,
    FormsModule,HttpClientModule,
    DialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

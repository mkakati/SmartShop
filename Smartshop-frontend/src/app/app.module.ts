import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule,Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './areas/account/login/login.component';
import { RegisterComponent } from './areas/account/register/register.component';
import { ForgotpasswordComponent } from './areas/account/forgotpassword/forgotpassword.component';
import { OtpComponent } from './areas/account/otp/otp.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AddProComponent } from './areas/seller/add-pro/add-pro.component';
import { ListProComponent } from './areas/seller/list-pro/list-pro.component';
import { SidenavbarComponent } from './areas/seller/sidenavbar/sidenavbar.component';


import { MatDialogModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule,MatCardModule,
  MatFormFieldModule,MatInputModule,MatTooltipModule,MatTableModule } from  '@angular/material';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatProgressSpinnerModule } from  '@angular/material';
import { SellerDashboardComponent } from './areas/seller/seller-dashboard/seller-dashboard.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductService } from './areas/seller/services/product.service';
import { SellerloginComponent } from './areas/seller/sellerlogin/sellerlogin.component';
import { SellerregistrationComponent } from './areas/seller/sellerregistration/sellerregistration.component';
import { ForgotpassComponent } from './areas/seller/forgotpass/forgotpass.component';
import { SellerotpComponent } from './areas/seller/sellerotp/sellerotp.component';
import { SubcategorypageComponent } from './areas/buyer/subcategorypage/subcategorypage.component';
import { ProductbysubcategoryComponent } from './areas/buyer/productbysubcategory/productbysubcategory.component';
import { SidebarComponent } from './areas/buyer/sidebar/sidebar.component';
import {BecomesellerComponent} from './areas/buyer/becomeseller/becomeseller.component';
//import { SellerchangepasswordComponent } from './areas/seller/sellerlogin/sellerchangepassword/sellerchangepassword.component';
import { ProductdetailsComponent } from './areas/productdetails/productdetails/productdetails.component';
import { ForgetpasswordToOtpComponent } from './areas/account/forgetpassword-to-otp/forgetpassword-to-otp.component';
import { ChangepasswordComponent } from './areas/account/changepassword/changepassword.component';
import { EditComponent } from './areas/seller/edit/edit.component';
import { DeleteComponent } from './areas/seller/delete/delete.component';
import { ToastrModule } from 'ngx-toastr'; 
import { NgxSpinnerModule } from "ngx-spinner";
import {MycartComponent} from './areas/buyer/mycart/mycart.component';
import {CheckoutComponent} from './areas/buyer/checkout/checkout.component';
import { ForgotpassotpComponent } from './areas/seller/sellerlogin/forgotpassotp/forgotpassotp.component';
import { IncomingorderComponent } from './areas/seller/incomingorder/incomingorder.component';
import { DeletecartitemComponent } from './areas/buyer/deletecartitem/deletecartitem.component';
import { WithdrawlComponent } from './areas/seller/withdrawl/withdrawl.component';

import {MyordersComponent} from './areas/buyer/myorders/myorders.component';
import {MyordersdetailsComponent} from './areas/buyer/myordersdetails/myordersdetails.component';
import {PaymentComponent} from './areas/buyer/payment/payment.component';
import { AdminComponent } from './areas/admin/admin/admin.component';
import { SellerlistComponent } from './areas/admin/sellerlist/sellerlist.component';
import { BuyerlistComponent } from './areas/admin/buyerlist/buyerlist.component';
import { DeactivatedbuyerlistComponent } from './areas/admin/deactivatedbuyerlist/deactivatedbuyerlist.component';
import {AfterpaymentsuccessComponent} from './areas/buyer/afterpaymentsuccess/afterpaymentsuccess.component';
import { SafePipe } from './safe.pipe';
import { SalerhistoryComponent } from './areas/seller/salerhistory/salerhistory.component';
import { LinkaccountComponent } from './areas/seller/linkaccount/linkaccount.component';
import { AuthGuard } from './areas/seller/auth.guard';
import { BankconfirmationComponent } from './areas/seller/bankconfirmation/bankconfirmation.component';
import { SellerpaymentComponent } from './areas/seller/sellerpayment/sellerpayment.component';
import { SearchComponent } from './areas/buyer/search/search.component';
import { AddcategoriesComponent } from './areas/seller/addcategories/addcategories.component';
import { AddsubcategoryComponent } from './areas/seller/addsubcategory/addsubcategory.component';
import {MyprofileComponent} from './areas/buyer/myprofile/myprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    OtpComponent,
    HeaderComponent,
    AddProComponent,
    ListProComponent,
    SidenavbarComponent,
    SellerDashboardComponent,
    HomepageComponent,
    FooterComponent,
    SellerloginComponent,
    SellerregistrationComponent,
    ForgotpassComponent,
    SellerotpComponent,
    
    SubcategorypageComponent,
    ProductbysubcategoryComponent,
    SidebarComponent,
    BecomesellerComponent,
    CheckoutComponent,
   
    ProductdetailsComponent,
    ForgetpasswordToOtpComponent,
    ChangepasswordComponent,
    EditComponent,
    DeleteComponent,
    MycartComponent,
    ForgotpassotpComponent,
    IncomingorderComponent,
    DeletecartitemComponent,
    MyordersComponent,
    MyordersdetailsComponent,
    WithdrawlComponent,
    PaymentComponent,
    AdminComponent,
    SellerlistComponent,
    BuyerlistComponent,
    DeactivatedbuyerlistComponent,
    AfterpaymentsuccessComponent,
    SafePipe,
    SalerhistoryComponent,
    LinkaccountComponent,
    BankconfirmationComponent,
    SellerpaymentComponent,
    SearchComponent,
    AddcategoriesComponent,
    AddsubcategoryComponent,
    MyprofileComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule, MatDatepickerModule,MatNativeDateModule,MatCardModule,
    MatFormFieldModule,MatInputModule,MatTooltipModule,MatTableModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  
   

  ],
  entryComponents: [
    EditComponent,
    DeleteComponent,
    DeletecartitemComponent,
    AddcategoriesComponent,
    AddsubcategoryComponent
  ],
  providers: [ProductService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
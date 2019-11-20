import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './areas/account/login/login.component';
import { RegisterComponent } from './areas/account/register/register.component';
import { ForgotpasswordComponent } from './areas/account/forgotpassword/forgotpassword.component';
import { OtpComponent } from './areas/account/otp/otp.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddProComponent } from './areas/seller/add-pro/add-pro.component';
import { ListProComponent } from './areas/seller/list-pro/list-pro.component';
//import { SidenavbarComponent } from './areas/seller/sidenavbar/sidenavbar.component';
import { SellerDashboardComponent } from './areas/seller/seller-dashboard/seller-dashboard.component';
import { SellerloginComponent } from './areas/seller/sellerlogin/sellerlogin.component';
import { SellerregistrationComponent } from './areas/seller/sellerregistration/sellerregistration.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { SellerotpComponent } from './areas/seller/sellerotp/sellerotp.component';
import { ForgotpassComponent } from './areas/seller/forgotpass/forgotpass.component';
import { SubcategorypageComponent } from './areas/buyer/subcategorypage/subcategorypage.component';
import { buyer_routes } from './areas/buyer/buyer-routing.module';
import { BecomesellerComponent } from './areas/buyer/becomeseller/becomeseller.component';
import { ForgetpasswordToOtpComponent } from './areas/account/forgetpassword-to-otp/forgetpassword-to-otp.component';
import { ChangepasswordComponent } from './areas/account/changepassword/changepassword.component';
import { ProductdetailsComponent } from './areas/productdetails/productdetails/productdetails.component';
import { MycartComponent } from './areas/buyer/mycart/mycart.component';
import { CheckoutComponent } from './areas/buyer/checkout/checkout.component';
import { ForgotpassotpComponent } from './areas/seller/sellerlogin/forgotpassotp/forgotpassotp.component';
import { IncomingorderComponent } from './areas/seller/incomingorder/incomingorder.component';
import { WithdrawlComponent } from './areas/seller/withdrawl/withdrawl.component';
import { MyordersComponent } from './areas/buyer/myorders/myorders.component';
import { MyordersdetailsComponent } from './areas/buyer/myordersdetails/myordersdetails.component';
import { PaymentComponent } from './areas/buyer/payment/payment.component';
import { AdminComponent } from './areas/admin/admin/admin.component';
import { SellerlistComponent } from './areas/admin/sellerlist/sellerlist.component';
import { BuyerlistComponent } from './areas/admin/buyerlist/buyerlist.component';
import { DeactivatedbuyerlistComponent } from './areas/admin/deactivatedbuyerlist/deactivatedbuyerlist.component';
import { AfterpaymentsuccessComponent } from './areas/buyer/afterpaymentsuccess/afterpaymentsuccess.component';
import { SalerhistoryComponent } from './areas/seller/salerhistory/salerhistory.component';
import { AuthGuard } from './areas/seller/auth.guard';
import { LinkaccountComponent } from './areas/seller/linkaccount/linkaccount.component';
import { SidenavbarComponent } from './areas/seller/sidenavbar/sidenavbar.component';
import { BankconfirmationComponent } from './areas/seller/bankconfirmation/bankconfirmation.component';
import { SellerpaymentComponent } from './areas/seller/sellerpayment/sellerpayment.component';
import { SearchComponent } from './areas/buyer/search/search.component';
import { AddcategoriesComponent } from './areas/seller/addcategories/addcategories.component';
import { MyprofileComponent } from './areas/buyer/myprofile/myprofile.component';



export const routes: Routes = [{path:'account/login',component:LoginComponent},
                               {path:'account/register',component:RegisterComponent},
                               {path:'account/forget-password',component:ForgotpasswordComponent},
                               {path:'account/otp',component:OtpComponent},
                               {path:'account/forgetpasswordtootp',component:ForgetpasswordToOtpComponent},
                               {path:'account/changepassword',component:ChangepasswordComponent},
                               {path:'buyer/myorders',component:MyordersComponent},
                               {path:'smartshop',component:HeaderComponent},
                              { path:'seller/sellerlogin',component:SellerloginComponent},
                              {path:'seller/sellerregister',component:SellerregistrationComponent},
                              {path:'seller/forgotpass',component:ForgotpassComponent},
                              {path:'seller/sellerotp',component:SellerotpComponent},
                               { path: 'homepage', component: HomepageComponent },
                               { path: '', component: HomepageComponent },
                               {path:'seller-dashboard',component:SellerDashboardComponent},
                              { path: '', component: AddProComponent, pathMatch: 'full' },  
                              { path: 'list-pro', component: ListProComponent ,canActivate: [AuthGuard] },  
                              { path: 'add-pro', component: AddProComponent,canActivate: [AuthGuard] } ,
                              {path:'subcategory' ,component:SubcategorypageComponent,children:buyer_routes},
                              {path:'buyer/becomeseller',component:BecomesellerComponent}, 
                              {path:'buyer/mycart',component:MycartComponent},
                              {path:'productdetail',component:ProductdetailsComponent,} ,
                              {path:'buyer/checkout',component:CheckoutComponent} ,
                              {path:'sellerforgetpass',component:ForgotpassotpComponent},
                              {path:'incomingorder',component:IncomingorderComponent,canActivate: [AuthGuard]} ,
                              {path:'withdrawl',component:WithdrawlComponent},
                              {path:'buyer/myorderdetails',component:MyordersdetailsComponent},
                              {path:'buyer/payment/',component:PaymentComponent},
                              {path:'admin',component:AdminComponent,canActivate: [AuthGuard]},
                              {path:'admin/sellerlist',component:SellerlistComponent,canActivate: [AuthGuard]},
                              {path:'admin/buyerlist',component:BuyerlistComponent,canActivate: [AuthGuard]},
                              {path:'admin/deactivatedbuyerlist',component:DeactivatedbuyerlistComponent,canActivate: [AuthGuard]},
                              {path:'buyer/afterpayment',component:AfterpaymentsuccessComponent,canActivate: [AuthGuard]},
                              {path:'buyer/payment',component:PaymentComponent},
                              {path:'sellerhistory',component:SalerhistoryComponent,canActivate: [AuthGuard]},
                              {path:'linkbank',component:LinkaccountComponent,canActivate: [AuthGuard]},
                              {path:'side', component:SidenavbarComponent,canActivate: [AuthGuard]},
                              {path:'bankconfirmation',component:BankconfirmationComponent},
                              {path:'sellerpayment',component:SellerpaymentComponent,canActivate: [AuthGuard]},
                              {path:'search',component:SearchComponent},
                              {path:'category',component:AddcategoriesComponent},
                              {path:'buyer/myprofile',component:MyprofileComponent}
                              ];
                           

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

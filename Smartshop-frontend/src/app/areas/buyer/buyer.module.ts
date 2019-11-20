import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { SubcategorypageComponent } from './subcategorypage/subcategorypage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductbysubcategoryComponent } from './productbysubcategory/productbysubcategory.component';
import { BecomesellerComponent } from './becomeseller/becomeseller.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeletecartitemComponent } from './deletecartitem/deletecartitem.component';
import {MyordersComponent} from './myorders/myorders.component';
import {MyordersdetailsComponent} from './myordersdetails/myordersdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { AfterpaymentsuccessComponent } from './afterpaymentsuccess/afterpaymentsuccess.component';
import { SearchComponent } from './search/search.component';
import { MyprofileComponent } from './myprofile/myprofile.component';


@NgModule({
  declarations: [
    SubcategorypageComponent,
    SidebarComponent, 
    ProductbysubcategoryComponent,
    BecomesellerComponent,
    MycartComponent,
    CheckoutComponent,
    DeletecartitemComponent,
    MyordersComponent,
    MyordersdetailsComponent,
    PaymentComponent,
    AfterpaymentsuccessComponent,
    SearchComponent,
    MyprofileComponent
      ],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }

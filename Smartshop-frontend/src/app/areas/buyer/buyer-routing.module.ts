import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductbysubcategoryComponent } from './productbysubcategory/productbysubcategory.component';

import { CheckoutComponent } from './checkout/checkout.component';


export const buyer_routes: Routes = [{path:'prosubcat',component:ProductbysubcategoryComponent},
                                     //{path:'buyer/checkout',component:CheckoutComponent}  

                                    ];

@NgModule({
  imports: [RouterModule.forChild(buyer_routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }

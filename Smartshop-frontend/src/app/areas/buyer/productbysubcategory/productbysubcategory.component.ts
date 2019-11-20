import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdetailserviceService } from '../../productdetails/productdetailservice.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-productbysubcategory',
  templateUrl: './productbysubcategory.component.html',
  styleUrls: ['./productbysubcategory.component.css']
})
export class ProductbysubcategoryComponent implements OnInit {

  subId;
  utils;
  apires;
  cartresponse;
  tempid;
  constructor(private cart:CartService,private httpservice:HttpClient,private route: ActivatedRoute,private router:Router,private fb:FormBuilder,private proService:ProductdetailserviceService,private toastr: ToastrService) { 
    this.route.queryParams.subscribe(params => {
    this.subId = params['subCatId'];
    this.httpservice.get('http://localhost:54673/api/Product/GetProductsBySubCateId/'+this.subId).subscribe
    (data =>{

       this.response=data;
       console.log(this.response);
       this.product=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  });
  }

  response;
  product;
  ngOnInit() {
   
  }


  onclickk(proid)
{
  this.router.navigateByUrl(
    this.router.createUrlTree(
      ['productdetail'], {queryParams: {ProductId: proid}}
    )
  );
  }
  detailFormmm=this.fb.group({

    quantity:['1'],
    ProductId:[]

  })
  

get quantity()
{

  return this.detailFormmm.get('quantity');
}
  
randomString() {
  var result = '';
  var chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

  onsubmit(productId)
{
  if(!localStorage.getItem("token")){
    if(!localStorage.getItem("tempuserid")){
      this.tempid=this.randomString();
    localStorage.setItem("tempuserid",this.tempid);
    }
    else{
      
      this.tempid=localStorage.getItem("tempuserid");
    }
    this.proService.tempcart(this.detailFormmm.value.quantity,productId,this.tempid)  
.subscribe(data => { 
  this.response=data;
      console.log(this.utils);
     this.utils=this.response.data;
     this.toastr.success("Added to Cart");
 //    this.increment(this.detailFormm.value.quantity);    
 this.cart.cartquantitywithoutlogin().subscribe(data => { 
  this.cartresponse=data;
  
   this.cart.carttotal=this.cartresponse.data;}); 
}, 
error => {  
  alert(error);  
  this.toastr.error(this.apires.Message);
}); 
  }

else{

  debugger;
  this.proService.detailformmm(this.detailFormmm.value,productId)  
  .subscribe(data => { 
    this.response=data;
        console.log(this.utils);
       this.utils=this.response.data; 
       this.toastr.success("Added to Cart");
       this.cart.getcartquantity().subscribe(data => { 
        this.cartresponse=data;
        debugger;
         this.cart.carttotal=this.cartresponse.data;});

},  
error => {  
alert(error);  
this.toastr.error(this.apires.Message);
});  
 
}

  }

}

import { Component, OnInit } from '@angular/core';
import { ProductdetailserviceService } from '../productdetailservice.service';
import {ProductDetail} from '../productdetail.model'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../../seller/Product.model';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  apires;
  message=null;
  productdetail;
  response;
  utils;
  cartresponse;
  tempid;
  constructor(private cart:CartService,private fb:FormBuilder, private proService: ProductdetailserviceService,private toastr: ToastrService) { }



  detailForm=this.fb.group({

    quantity:['1'],

  })
  

get quantity()
{

  return this.detailForm.get('quantity');
}
  

  ngOnInit() {

    this.proService.getProductById()  
    .subscribe
    ( (response=>{
      this.apires=response;
      console.log(this.apires);   

      if(this.apires.StatusCode==400){
        this.message=this.apires.Message;
      }
      else if(this.apires.StatusCode==200){
       
        this.productdetail=this.apires.data;
        //localStorage.setItem("token",this.apires.data.token);
        //this.router.navigateByUrl('homepage');
      }  
  })); 
}

randomString() {
  var result = '';
  var chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
onsubmit()
{
  if(!localStorage.getItem("token")){
    if(!localStorage.getItem("tempuserid")){
      this.tempid=this.randomString();
    localStorage.setItem("tempuserid",this.tempid);
    }
    else{
      
      this.tempid=localStorage.getItem("tempuserid");
    }
    this.proService.singletempcart(this.detailForm.value.quantity,this.tempid)  
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
  this.proService.detailform(this.detailForm.value)  
  .subscribe(data => { 
    this.response=data;
        console.log(this.utils);
       this.utils=this.response.data; 
       this.toastr.success("Added to cart");
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

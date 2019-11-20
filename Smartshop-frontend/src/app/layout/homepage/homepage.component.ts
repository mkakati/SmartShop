import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductdetailserviceService } from 'src/app/areas/productdetails/productdetailservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  productdetail;
  message=null;
  utils;
  apires;
  cartresponse;
  constructor(private cart:CartService,private router:Router ,private httpservice:HttpClient,private fb:FormBuilder,private proService:ProductdetailserviceService,private toastr: ToastrService) { }
  category;
  response;
  recent;
  tempid;
  tempuserid;
  ngOnInit() {
    if(localStorage.getItem("token") && localStorage.getItem("tempuserid"))
    {
      debugger;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      this.httpservice.post('http://localhost:54673/api/Buyer/GetCartDataFromTemp',{'TempUserId':localStorage.getItem("tempuserid")},httpOptions).subscribe
      (data =>{
        this.apires=data;
        console.log(this.apires);   
        if(this.apires.StatusCode==400){  
          this.toastr.error(this.apires.Message);
        }
        else if(this.apires.StatusCode==200){
          debugger;
        //  this.toastr.success(this.apires.Message);
          localStorage.removeItem("tempuserid");
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      ); 

    }
   
   
    this.httpservice.get('http://localhost:54673/api/Product/GetCategories').subscribe
    (data =>{

       this.response=data;
       console.log(this.category);
       this.category=this.response.data;
    },
    
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 

    this.httpservice.get('http://localhost:54673/api/Buyer/GetRecentProducts').subscribe
    (data =>{

       this.response=data;
       console.log(this.recent);
       this.recent=this.response.data;
    },
    
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  

  }
  detailFormm=this.fb.group({

    quantity:['1'],
    ProductId:[]

  })
  

get quantity()
{

  return this.detailFormm.get('quantity');
}
randomString() {
  var result = '';
  var chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}


  
onsubmit(productId)
{
  debugger;
  if(!localStorage.getItem("token")){
    if(!localStorage.getItem("tempuserid")){
      this.tempid=this.randomString();
    localStorage.setItem("tempuserid",this.tempid);
    }
    else{
      
      this.tempid=localStorage.getItem("tempuserid");
    }
    this.proService.tempcart(this.detailFormm.value.quantity,productId,this.tempid)  
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
this.proService.detailformm(this.detailFormm.value,productId)  
.subscribe(data => { 
  this.response=data;
      console.log(this.utils);
     this.utils=this.response.data;
     this.toastr.success("Added to Cart");
 //    this.increment(this.detailFormm.value.quantity);    
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



onclick(proid)
{
  this.router.navigateByUrl(
    this.router.createUrlTree(
      ['productdetail'], {queryParams: {ProductId: proid}}
    )
  );
  }
}






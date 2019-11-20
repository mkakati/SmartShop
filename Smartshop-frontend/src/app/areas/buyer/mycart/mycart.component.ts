import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MatDialog} from '@angular/material';
import{DeletecartitemComponent} from '../deletecartitem/deletecartitem.component'

import { BuyerserviceService } from '../buyerservice.service';
import {ToastrService} from'ngx-toastr';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  decodeToken;
  isBuyer=false;
  isSeller=false;
  isLogin=false;
  isVerified=false;
  CartId:string;
  verify;
  InStock=true;
  Iscartempty=false;
  constructor(private spinner:NgxSpinnerService,private router:Router,private httpservice:HttpClient,private dialog:MatDialog,private Service:BuyerserviceService,private toastr:ToastrService) { }
  response;
  mycart;
  total;
  ngOnInit() {
    if(localStorage.getItem("tempuserid"))
    {
      debugger;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
         // "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      this.httpservice.get('http://localhost:54673/api/Buyer/GetCartDataWithoutLogin?tempId='+localStorage.getItem("tempuserid"),httpOptions).subscribe
      (data =>{

        this.response=data;
        console.log(this.mycart);
        this.mycart=this.response.data;
        debugger;
        if(this.mycart==null){
            this.Iscartempty=true;
        }
        this.mycart.forEach(cart => {
          if(this.InStock){
            if(!cart.InStock){
              this.InStock=false;
            }
          }   
        });
     },
     (err: HttpErrorResponse) => {
       console.log (err.message);
     }
     ); 
    }else{
      const httpOptions = {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + localStorage.getItem('token') 
        })
      };
      this.httpservice.get('http://localhost:54673/api/Buyer/ViewCartItems',httpOptions).subscribe
      (data =>{
  
         this.response=data;
         console.log(this.mycart);
         this.mycart=this.response.data;
         if(this.mycart==null){
          this.Iscartempty=true;
          }
         this.mycart.forEach(cart => {
          if(this.InStock){
            if(!cart.InStock){
              this.InStock=false;
            }
          }   
        });
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      ); 
      this.httpservice.get(' http://localhost:54673/api/Buyer/GetCartTotal',httpOptions).subscribe
      (data =>{
  
         this.response=data;
         console.log(this.total);
         this.total=this.response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      ); 
    }
    this.changeflagg();

    
  }
 


  deleteItem(CartId:string,ProductName:string,UnitPrice:string,Quantity:string,ProductId) {
    if(localStorage.getItem("tempuserid")){
      debugger;
      this.CartId = ProductId;
    const dialogRef = this.dialog.open(DeletecartitemComponent, {
      data: {CartId:this.CartId,ProductName: ProductName,UnitPrice:UnitPrice,Quantity:Quantity}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.Service.dataChange.value.findIndex(x => x.CartId === this.CartId);
        this.Service.dataChange.value.splice(foundIndex, 1);
        this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/buyer/mycart"])); 
        
      }
    });
    }else{
      this.CartId = CartId;
    const dialogRef = this.dialog.open(DeletecartitemComponent, {
      data: {CartId:CartId,ProductName: ProductName,UnitPrice:UnitPrice,Quantity:Quantity}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.Service.dataChange.value.findIndex(x => x.CartId === this.CartId);
        this.Service.dataChange.value.splice(foundIndex, 1);
        this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/buyer/mycart"])); 
        
      }
    });
    }
    
  }
  apires:any;
  deletecart(){
  
    this.cartitem();
  }
  cartitem(){
if (localStorage.getItem("tempuserid")){

  this.Service.tempentirecart().subscribe
  ( (response=>{
    this.apires=response;
    console.log(this.apires);   
    if(this.apires.StatusCode==400){  

      this.toastr.error(this.apires.Message);
    }
    else if(this.apires.StatusCode==200){
      
      this.toastr.success("Deleted");
      this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/buyer/mycart"])); 
    }  
}));
}
else{
  this.Service.entirecart().subscribe
  ( (response=>{
    this.apires=response;
    console.log(this.apires);   
    if(this.apires.StatusCode==400){  
      this.toastr.error(this.apires.Message);
    }
    else if(this.apires.StatusCode==200){
      this.toastr.success("Deleted");
      this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/buyer/mycart"])); 
    }  
}));

}
   
}
changeflagg(){
  debugger;
  if(localStorage.getItem("token")){
    this.isLogin=true;
    this.decodeToken = jwt_decode(localStorage.getItem("token"));
    this.isVerified=this.decodeToken.isVerified;
    if(this.decodeToken.role.includes("Buyer")){
      this.isBuyer=true;
    }
    if(this.decodeToken.role.includes("Seller")){
      this.isSeller=true;
    }
  }
  
}

otpverify()
{
this.spinner.show();
  const httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token') 
    })
  };
  this.httpservice.post('http://localhost:54673/api/Account/ResendOtp',null,httpOptions).subscribe
  (data =>{

     this.response=data;
     console.log(this.verify);
     this.verify=this.response.data;
     this.spinner.hide();
     this.router.navigateByUrl('/account/otp');
  },
  (err: HttpErrorResponse) => {
    this.spinner.hide();

    console.log (err.message);
  }
  ); 


}


}

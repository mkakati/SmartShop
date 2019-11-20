import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { orders } from './incomingorder.model';
import { MatSelectTrigger } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incomingorder',
  templateUrl: './incomingorder.component.html',
  styleUrls: ['./incomingorder.component.css']
})
export class IncomingorderComponent implements OnInit {
  orderss:orders={StatusFlag:"",OrdersMasterId:""};

  apires;
  message;
  order;

  constructor(private proService:ProductService,private httpservice:HttpClient,private router:Router) { }

  ngOnInit() {



    this.proService.getIncomingorder()  
    .subscribe
    ( (response=>{
      this.apires=response;
      console.log(this.apires);   

      if(this.apires.StatusCode==400){
        this.message=this.apires.Message;
      }
      else if(this.apires.StatusCode==200){
       
        this.order=this.apires.data;
       
        
      }  
  })); 

  
  }


onSelect(StatusFlag,OrdersMasterId)
{
  debugger;
  this.orderss.StatusFlag=StatusFlag;
  this.orderss.OrdersMasterId=OrdersMasterId;
  

  this.proService.Orders(this.orderss).subscribe(); 
  this.router.navigateByUrl('/seller/sellerlogin', {skipLocationChange: true}).then(()=>
  this.router.navigate(["incomingorder"])); 
}


}





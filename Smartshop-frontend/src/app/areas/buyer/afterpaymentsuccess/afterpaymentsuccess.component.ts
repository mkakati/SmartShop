import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {pay} from './payment';
import {NgxSpinnerService} from 'ngx-spinner';




@Component({
  selector: 'app-afterpaymentsuccess',
  templateUrl: './afterpaymentsuccess.component.html',
  styleUrls: ['./afterpaymentsuccess.component.css']
})
export class AfterpaymentsuccessComponent implements OnInit {
  pays:pay={TransactionId:0,OrderId:0,Message:"",Amount:0};
  TransactionId;
  OrderId;
  Message;
  Amount;
  response;
  details;
  constructor(private route:ActivatedRoute,private httpservice:HttpClient,private router:Router,private spinner:NgxSpinnerService) 
  { 
    this.spinner.show();
    debugger;
    this.route.queryParams.subscribe(params => {
    this.TransactionId = params['TransactionId'];
    this.OrderId = params['OrderId'];
    this.Message = params['Message'];
    this.Amount = params['Amount'];


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    debugger;
   this.pays.TransactionId=this.TransactionId;
   this.pays.OrderId=this.OrderId;
   this.pays.Message=this.Message;
   this.pays.Amount=this.Amount;

  this.httpservice.post('http://localhost:54673/api/Buyer/details',this.pays,httpOptions).subscribe(data => { 
    let response:any=data;
      if(response.StatusCode==200 || response.StatusCode==400){
        this.router.navigateByUrl("/buyer/myorderdetails?OrderID="+this.pays.OrderId);
      }
     });  
 
   
  // this.httpservice.get('http://localhost:54673/api/Buyer/GetDetails/?orderid='+this.OrderId).subscribe
  //   (data =>{

  //      this.response=data;
  //      console.log(this.details);
  //      this.details=this.response.data;
  //     this.router.navigateByUrl('/buyer/afterpayment');
  //   },
    
    
  //   (err: HttpErrorResponse) => {
  //     console.log (err.message);
  //   }
  //   ); 
 
  }
  )}
  

 ngOnInit(){}
    

}

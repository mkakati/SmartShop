import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { payment } from './sellerpayment.model';

@Component({
  selector: 'app-sellerpayment',
  templateUrl: './sellerpayment.component.html',
  styleUrls: ['./sellerpayment.component.css']
})
export class SellerpaymentComponent implements OnInit {
  response;
  withdrawal;
  withdrawalmoneyy;
  AccountId;
  account;
  unlinkk;
  dis;
  payment:payment={AccountId:"",AddBalance:""};

  constructor(private httpservice:HttpClient) { }

  ngOnInit() {
    const httpOptions={headers:new HttpHeaders
      ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
      
    this.httpservice.get('http://localhost:54673/api/Seller/GetAmountForWithdrawl',httpOptions).subscribe
    (data =>{

      this.response=data;
      console.log(this.response);
      this.withdrawal=this.response.data;
   },
   (err: HttpErrorResponse) => {
     console.log (err.message);
   }
   ); 



   const httpOptionss={headers:new HttpHeaders
    ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
    
  this.httpservice.get('http://localhost:54673/api/Seller/GetAccountId',httpOptionss).subscribe
  (data =>{

    this.response=data;
    console.log(this.response);
    this.account=this.response.data;
 },
 (err: HttpErrorResponse) => {
   console.log (err.message);
 }
 ); 



  }

  withdrawalmoney()
{

  const httpOptions={headers:new HttpHeaders
    ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
    this.payment.AccountId=this.account;
    this.payment.AddBalance=this.withdrawal;
  this.httpservice.post("http://localhost:57436/api/Bank/WithdrawMoney/",this.payment,httpOptions).subscribe
  (data =>{

    this.response=data;
    console.log(this.response);
    this.withdrawalmoneyy=this.response.data;
    this.httpservice.get('http://localhost:54673/api/Seller/Disbursed',httpOptions).subscribe
    (data =>{

      this.response=data;
      console.log(this.response);
      this.dis=this.response.data;
      this.ngOnInit();
    },
    (err: HttpErrorResponse) => {
    console.log (err.message);
    }
    ); 
 },
 (err: HttpErrorResponse) => {
   console.log (err.message);
 }
 );




  
}
unlink()
{
  const httpOptionss={headers:new HttpHeaders
    ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
    
  this.httpservice.get('http://localhost:54673/api/Seller/Unlink',httpOptionss).subscribe
  (data =>{

    this.response=data;
    console.log(this.response);
    this.unlinkk=this.response.data;
    this.ngOnInit();
 },
 (err: HttpErrorResponse) => {
   console.log (err.message);
 }
 ); 


}


}

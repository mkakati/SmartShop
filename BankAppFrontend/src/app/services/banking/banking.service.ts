import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import add from '../../model/banking/add-money';
import sendMoney from '../../model/banking/send-money';
import {UserOrder}  from '../../model/banking/user-order';
import linkaccount from '../../model/banking/linkaccount';
import changepass from '../../model/banking/change-password'
import {environment} from '../../../environments/environment'
import transactionhistory from '../../model/banking/transaction-history';
@Injectable({
  providedIn: 'root'
})
export class BankingService {
 

  constructor(private http:HttpClient) { }
  
  detail(accountid:number){
    debugger
    return this.http.get(environment.base_url+'api/Bank/CheckDetails?AccountId='+accountid);
  }
  checkBalance(accountid:number){
    debugger
    return this.http.get(environment.base_url+'api/Bank/ShowBalance?AccountId='+accountid);
  }
  verifyAccount(sendMoney:sendMoney){
    debugger
     let headers=new HttpHeaders();
   headers.append('Content-Type','application/json')
   return this.http.post(environment.base_url+'api/Bank/CheckAccAndEmail',sendMoney,{headers:headers, responseType:"json"})
  }
  verifyBalance(sendMoney:sendMoney){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/CheckACCBal',sendMoney,{headers:headers,responseType:"json"})
  }

  sendMoney(send:sendMoney){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/SendMoney',send,{headers:headers,responseType:"json"})
  }

  // showDetail(accountid:number){
  //   debugger
  //   return this.http.get(this.base_url+'api/Bank/CheckDetails');
  // }
   
  addMoney(add:add){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/AddMoney',add,{headers:headers,responseType:"json"});
  }

  userorder(userorder:UserOrder){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/CheckoutTransaction',userorder,{headers:headers,responseType:"json"});
  }

  verifyuseraccount(Accountno:string){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/CheckAccountandSendOtp?Accountno='+Accountno,{headers:headers,responseType:"json"});
  }

  transactionhistory(transaction:transactionhistory){
    debugger;
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/TransactionsHistory',transaction,{headers:headers,responseType:"json"});
  }

  linkaccount(linkaccount:linkaccount){
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/LinkBank',linkaccount,{headers:headers,responseType:"json"});
  }

  changepass(changepass:changepass){
    let headers=new HttpHeaders();
    headers.append('Content-Type','Application/json');
    return this.http.post(environment.base_url+'api/Bank/ChangePassword',changepass,{headers:headers,responseType:"json"});
  }
  }


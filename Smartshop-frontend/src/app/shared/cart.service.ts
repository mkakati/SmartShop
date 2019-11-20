import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl;
  carttotal:number=0;
  constructor(private http:HttpClient) {

this.baseUrl='http://localhost:54673/api/Buyer'

   }

getcartquantity()
{

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('token')
      
    })
  };
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  return this.http.get(this.baseUrl+'/GetCartQuantity',httpOptions);  
}  


cartquantitywithoutlogin(){
  debugger;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
       
      
    })
  };
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  return this.http.get(this.baseUrl+'/GetCartQuantityWithoutLogin/?tempuserid='+localStorage.getItem("tempuserid"),httpOptions);  
}
}




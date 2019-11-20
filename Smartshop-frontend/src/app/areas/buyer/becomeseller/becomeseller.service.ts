import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {buyertoseller} from './becomeseller';

@Injectable({
  providedIn: 'root'
})
export class BecomesellerService {

 
  urlbuyertoseller:string;


  constructor(private http:HttpClient) { 
  
    this.urlbuyertoseller='http://localhost:54673/api/Account';
   
  }

  Becomeseller(becomeseller:buyertoseller){
  
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      return this.http.post<buyertoseller[]>
      (this.urlbuyertoseller+'/BuyerToSeller',becomeseller,httpOptions)
    }

}

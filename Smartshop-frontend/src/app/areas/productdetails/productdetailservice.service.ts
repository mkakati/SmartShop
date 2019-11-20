import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import {ProductDetail }from '../productdetails/productdetail.model'
import { ActivatedRoute } from '@angular/router';
import { Addtocart, addtempcart } from './productdetails/addtocart.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductdetailserviceService {

  ProductId;
  //existingquantity=0;
  
  constructor(private http: HttpClient,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.ProductId = params['ProductId'];

      });
  }  
  baseUrl: string = 'http://localhost:54673/api/Product/';  

  getProductById() {  

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    return this.http.get<ProductDetail[]>(this.baseUrl+'GetProductsByProductId/'+this.ProductId,httpOptions);  
  }  

detailform(productdetail:Addtocart)
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
  productdetail.ProductId=this.ProductId;
  return this.http.post<ProductDetail[]>('http://localhost:54673/api/buyer/AddCartItems',productdetail,httpOptions);  

}

detailformm(productdetail:Addtocart,productId)
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
  productdetail.ProductId=productId;
  return this.http.post<ProductDetail[]>('http://localhost:54673/api/buyer/AddCartItems',productdetail,httpOptions);  
 
}

tempcart(quantity,productId,tempid)
{
  debugger;
  let temp:addtempcart={quantity:" ",ProductId:0,TempUserId:""};
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
      
    })
  };
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  temp.ProductId=productId;
  temp.quantity=quantity;
  temp.TempUserId=tempid;

  return this.http.post('http://localhost:54673/api/Buyer/AddTemporaryCartItems',temp,httpOptions);  
 
}
singletempcart(quantity,tempid)
{
  debugger;
  let temp:addtempcart={quantity:" ",ProductId:0,TempUserId:""};
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
      
    })
  };
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  temp.ProductId=this.ProductId;
  temp.quantity=quantity;
  temp.TempUserId=tempid;

  return this.http.post('http://localhost:54673/api/Buyer/AddTemporaryCartItems',temp,httpOptions);  
 
}

detailformmm(productdetail:Addtocart,productId)
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
  productdetail.ProductId=productId;
  return this.http.post<ProductDetail[]>('http://localhost:54673/api/buyer/AddCartItems',productdetail,httpOptions);  
 
}



// private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);

// getCartItems() {
//   debugger;
//     return this.totalItems.asObservable();
// }

// updateCartItems(items: number) {
//   debugger;
//     this.totalItems.next(items);
// }
}

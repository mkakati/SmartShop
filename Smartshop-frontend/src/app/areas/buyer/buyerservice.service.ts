import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {checkout, place} from './checkout/checkout';
import { cart } from './mycart/cart';
import { BehaviorSubject } from 'rxjs';
import { cancelorder } from './myordersdetails/cancelorder';

@Injectable({
  providedIn: 'root'
})
export class BuyerserviceService {
  buyer:string;
  baseUrl:string;
  bank:string;
  emptycart:string;
  Place:place={AddressId:""}
  cart:cart={CartId:"",tempuserid:""};
  cancelorder:cancelorder={OrderMasterId:"",Amount:""};
 constructor(private http:HttpClient){
  this.buyer='http://localhost:54673/api/Address';
  this.baseUrl='http://localhost:54673/api/Buyer';
  this.bank="http://localhost:57436/api/Bank";
  this.emptycart="http://localhost:54673/api/Buyer";
 }


 addaddress(checkout:checkout){
            
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('token')

    })
  };
 httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    return this.http.post<checkout[]>
    (this.buyer+'/PostAddressBuyerId',checkout,httpOptions)
  }


  dialogData: any;
  get data(): cart[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  dataChange: BehaviorSubject<cart[]> = new BehaviorSubject<cart[]>([]);
  deletecartitem(cartId:string){
    
    if(localStorage.getItem("tempuserid")){
      debugger;
      this.cart.CartId=cartId;
      this.cart.tempuserid=localStorage.getItem("tempuserid");
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
       return this.http.post
        (this.baseUrl+'/DeleteTempCartItem',this.cart,httpOptions).subscribe();
    }
    else{
      debugger;
      this.cart.CartId=cartId;
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
       return this.http.post
        (this.baseUrl+'/DeleteCartItems',this.cart,httpOptions).subscribe();
    }
  
    }
    
    entirecart(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          "Authorization": "Bearer " + localStorage.getItem('token')
    
        })
      };    
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
        return this.http.post
        (this.baseUrl+'/EmptyCart',null,httpOptions)
      }

      tempentirecart(){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
            
      
          })
        };    
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
          return this.http.post
          (this.emptycart+'/EmptyTempCart?tempuserid='+localStorage.getItem("tempuserid"),httpOptions)
      }
     // http://localhost:54673/api/Buyer/EmptyTempCart?tempuserid=


      Placeorder(AddressId)
      {debugger;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Authorization": "Bearer " + localStorage.getItem('token')
      
          })
        };  
        this.Place.AddressId=AddressId;  
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
      
          return this.http.post
          (this.baseUrl+'/PlaceOrder',this.Place,httpOptions)

      }

      refund(OrderMasterId,UnitPrice){
        debugger;
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
           // "Authorization": "Bearer " + localStorage.getItem('token')
      
          })
        };  
        this.cancelorder.OrderMasterId=OrderMasterId;  
        this.cancelorder.Amount=UnitPrice;  
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
      
          return this.http.post
          (this.bank+'/InitiateRefund',this.cancelorder,httpOptions)

      }
      cancelstatus(OrderMasterId){
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Authorization": "Bearer " + localStorage.getItem('token')
          })
        };  

        
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
      
          return this.http.get
          (this.baseUrl+'/CancelOrderItem/?OrderMasterId='+OrderMasterId,httpOptions)
      }
  }
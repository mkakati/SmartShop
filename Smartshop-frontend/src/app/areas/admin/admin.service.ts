import { Injectable } from '@angular/core';
import { sellerlist } from './sellerlist/sellerlist';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { activatedlist } from './buyerlist/activatedlist';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  urlsellerapprove:string;
  Sellerlist:sellerlist={SellerId:""}
  buyeractivatedlist:activatedlist={MasterUserId:""}
  constructor(private http:HttpClient) {

    this.urlsellerapprove='http://localhost:54673/api/Admin';
   }
  

  accept(SellerId){
          
          debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    this.Sellerlist.SellerId=SellerId;  
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      return this.http.post<sellerlist[]>
      (this.urlsellerapprove+'/ApproveSellerRequestBySellerId?SellerId='+this.Sellerlist.SellerId,null,httpOptions)
    }

    reject(SellerId){
          
      debugger;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Authorization": "Bearer " + localStorage.getItem('token')
    
  })
};
this.Sellerlist.SellerId=SellerId;  
httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  return this.http.post<sellerlist[]>
  (this.urlsellerapprove+'/RejectSellerRequestBySellerId?SellerId='+this.Sellerlist.SellerId,null,httpOptions)
}


deactivate(MasterUserId){
          
  debugger;
const httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json',
Accept: 'application/json',
'Access-Control-Allow-Origin': '*',
"Authorization": "Bearer " + localStorage.getItem('token')

})
};
this.buyeractivatedlist.MasterUserId=MasterUserId;  
httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
return this.http.post<sellerlist[]>
(this.urlsellerapprove+'/DeactivateUserByMasterUserId?MasterUserId='+this.buyeractivatedlist.MasterUserId,null,httpOptions)
}

activate(MasterUserId){
          
  debugger;
const httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json',
Accept: 'application/json',
'Access-Control-Allow-Origin': '*',
"Authorization": "Bearer " + localStorage.getItem('token')

})
};
this.buyeractivatedlist.MasterUserId=MasterUserId;  
httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
return this.http.post<sellerlist[]>
(this.urlsellerapprove+'/ActivateUserByMasterUserId?MasterUserId='+this.buyeractivatedlist.MasterUserId,null,httpOptions)
}
}



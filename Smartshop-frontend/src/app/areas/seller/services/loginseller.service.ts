import { Injectable } from '@angular/core';
import{sellerotp}from '../sellerotp/sellerotp'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addsellerlogin } from '../sellerlogin/addsellerlogin';
import {Register}from '../sellerregistration/registrationseller'
import * as jwt_decode from 'jwt-decode';
import { forget } from '../sellerlogin/forgotpassotp/forgetpassotp';
//import{ }from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class LoginSellerService {
  isLoggednIn() {
    throw new Error("Method not implemented.");
  }
 
    urlregister:string;
    decodeToken:any;
  jwtHelperService: any;
    //urllogin:string;
      constructor(private http:HttpClient) { 
    
        this.urlregister='http://localhost:54673/api/account';
       
      }

      isAuthorized(): boolean {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        // if (allowedRoles == null || allowedRoles.length === 0) {
        //   return true;
        // }
        
      debugger;
        // get token from local storage or state management
       const token = localStorage.getItem('token');
      if(token==null)
      return false;
          // decode token to read the payload details
        this.decodeToken = jwt_decode(token);
        
          console.log(this.decodeToken);
      // check if it was decoded successfully, if not the token is not valid, deny access
        if (!this.decodeToken) {
          console.log('Invalid token');
          return false;
        }
        return this.decodeToken.role.includes("Seller");
     

      }

      Createregisterr(register:Register){
        debugger;
        // const httpOptions={headers:new HttpHeaders
        //   ({'Content-Type':'application/json'})};
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
           // "Authorization": "Bearer " + localStorage.getItem('token')
            
          })
        };
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
          return this.http.post<Register[]>
          (this.urlregister+'/RegisterSeller',register,httpOptions)
        
        
        
        
        
        }


        
    
     

      


Createloginn(loginform:addsellerlogin){
    debugger;
    const httpOptions={headers:new HttpHeaders
      ({'Content-Type':'application/json'})};
      return this.http.post<addsellerlogin[]>
      (this.urlregister+'/LoginSeller',loginform,httpOptions)
    }

    Verifysellerotp(sellerotp:sellerotp){
      debugger;
      // const httpOptions={headers:new HttpHeaders
      //   ({'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'})};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return this.http.post<sellerotp[]>
        (this.urlregister+'/VerifyOtp',sellerotp,httpOptions)
      }



      sellertobuyer()
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
          return this.http.post
          (this.urlregister+'/SellerToBuyer',null,httpOptions)
        }
        
        forgetpasstootp(forgetpasstootp:forget){
            
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*'
             
            })
          };
         httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            return this.http.post
            (this.urlregister+'/ResetPasswordByToken',forgetpasstootp,httpOptions)
          }

      

}
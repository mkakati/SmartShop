import { Injectable } from '@angular/core';
import {Register} from '../register/add'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { addlogin } from '../login/addlogin';
import {Otp} from '../otp/otp';
import {forgetpassword} from '../forgotpassword/forgetpassword';
import {forgettootp} from '../forgetpassword-to-otp/forget-to-otp';
import {change} from '../changepassword/changepassword';
import *as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  urlregister:string;
 
    constructor(private http:HttpClient) { 
  
      this.urlregister='http://localhost:54673/api/Account';
     
    }
  
    Createregister(register:Register){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return this.http.post<Register[]>
        (this.urlregister+'/RegisterBuyer',register,httpOptions)
      }
  
      decodeToken:any;

      isAuthorized(): boolean {
      
        
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
        return this.decodeToken.role.includes("Admin");

      }





      Createlogin(loginform:addlogin){
        debugger;
        const httpOptions={headers:new HttpHeaders
          ({'Content-Type':'application/json'})};
          return this.http.post<addlogin[]>
          (this.urlregister+'/Loginbuyer',loginform,httpOptions)
        }

        Verifyotp(Otp:Otp){
          
          
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*',
              "Authorization": "Bearer " + localStorage.getItem('token')
              
            })
          };
          httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            return this.http.post<Otp[]>
            (this.urlregister+'/VerifyOtp',Otp,httpOptions)
          }



          forgetpassword(forget:forgetpassword){
            debugger;
          
            // const httpOptions={headers:new HttpHeaders
            //   ({'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'})};
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
                // Accept: 'application/json',
                // 'Access-Control-Allow-Origin': '*'

              })
            };
         //   httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
              return this.http.post
              (this.urlregister+'/ForgetPassword',{'Email':forget.Email},httpOptions)
            }


            forgetpasstootp(forgetpasstootp:forgettootp){
            
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Access-Control-Allow-Origin': '*'
                  
                })
              };
              forgetpasstootp.Email=localStorage.getItem("Email");
             httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                return this.http.post
                (this.urlregister+'/ResetPasswordByToken',forgetpasstootp,httpOptions)
              }
  

              changepassword(changepassword:change){
            
                const httpOptions = {
                  headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    "Authorization": "Bearer " + localStorage.getItem('token')
    
                  })
                };
               httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                  return this.http.post<change[]>
                  (this.urlregister+'/ChangePassword',changepassword,httpOptions)
                }
          
  }

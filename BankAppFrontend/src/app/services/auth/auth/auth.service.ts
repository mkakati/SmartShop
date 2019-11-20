import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {observable, from} from 'rxjs';
import{HttpHeaders} from '@angular/common/http';
import register from '../../../model/auth/register';
import login from '../../../model/auth/login';
import Verify from 'src/app/model/auth/verifyOTP';
import forgotpass from '../../../model/auth/forgotpass';
import {environment} from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //base_url :string="http://localhost:57436/";
  constructor(private http:HttpClient) { }
  
  register(register:register){
    debugger;
   let headers=new HttpHeaders();
   headers.append('Content-Type','application/json');
   return this.http.post(environment.base_url+'api/Bank/PostUserSignUp', register,{headers:headers, responseType:"json"});
  }
 
   login(login:login){
     debugger;
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(environment.base_url+'api/Bank/PostUserLogin', login,{headers:headers, responseType:"json"}); 
   }

  
  verifyOtp(otpverify:Verify){
  debugger
 let headers=new HttpHeaders();
 headers.append('Content-Type','application/json');
 return this.http.post(environment.base_url+'api/Bank/VerifyOTP',otpverify ,{headers:headers, responseType:"json"});

  }
  resendOTP(otpverify:Verify){
    debugger
    let headers=new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post(environment.base_url+'api/Bank/ResendOTP',otpverify ,{headers:headers, responseType:"json"});
  }

  verifyEmail(otpverify:Verify){
    debugger
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(environment.base_url+'api/Bank/CheckAccAndEmail',otpverify ,{headers:headers, responseType:"json"});
     }
  resetpass(forgotpass:forgotpass){
    debugger
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post(environment.base_url+'api/Bank/UpdatePassword',forgotpass ,{headers:headers, responseType:"json"});
     }
    sendemail(forgotpass:forgotpass){
      debugger
      let headers=new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post(environment.base_url+'api/Bank/ForgotPassword',forgotpass ,{headers:headers, responseType:"json"});
     } 
     }
  




 


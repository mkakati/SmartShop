import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSellerService } from '../../services/loginseller.service';
import { ToastrService } from 'ngx-toastr';
import { forget } from './forgetpassotp';
import { passwordValidator } from './sellerpassword.validator';

@Component({
  selector: 'app-forgotpassotp',
  templateUrl: './forgotpassotp.component.html',
  styleUrls: ['./forgotpassotp.component.css']
})
export class ForgotpassotpComponent implements OnInit {

  apires:any;
  message=null;
  constructor(private fb:FormBuilder,private router:Router,private service:LoginSellerService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  forpassotp=this.fb.group({
    NewPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  cpass:[''],
  token:['',[Validators.required,Validators.minLength(6),Validators.pattern]],
},{validator:passwordValidator});



get NewPassword(){
  return this.forpassotp.get('NewPassword');
}

get cpass(){
  return this.forpassotp.get('cpass');
}

get token(){
  return this.forpassotp.get('token');
}



onSubmit() {
  
  
    const add=this.forpassotp.value;
     this.forgetpasstootp(add);
   
    
  }
  forgetpasstootp(forpassotp:forget){
      this.service.forgetpasstootp(forpassotp).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.toastr.success(this.apires.Message);
            localStorage.setItem("token",this.apires.data.token);
            this.router.navigateByUrl('homepage');
          }  
      }));
}
}

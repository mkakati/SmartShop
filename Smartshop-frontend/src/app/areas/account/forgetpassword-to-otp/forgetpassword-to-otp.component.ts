import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {passwordValidator} from './password.validator';
import {forgettootp} from './forget-to-otp';
import { AddDataService } from '../service/add-data.service';
import { ToastrService } from 'ngx-toastr';  
@Component({
  selector: 'app-forgetpassword-to-otp',
  templateUrl: './forgetpassword-to-otp.component.html',
  styleUrls: ['./forgetpassword-to-otp.component.css']
})
export class ForgetpasswordToOtpComponent implements OnInit {

  apires:any;
  message=null;
  constructor(private fb:FormBuilder,private router:Router,private service:AddDataService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  forpassotp=this.fb.group({
    NewPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  cpass:[''],
  token:['',[Validators.required,Validators.minLength(8),Validators.pattern]],
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
  forgetpasstootp(forpassotp:forgettootp){
      this.service.forgetpasstootp(forpassotp).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.toastr.success("Password has been changed,Login once again");
            this.router.navigate(['/homepage']);
          }  
      }));
}
}
  


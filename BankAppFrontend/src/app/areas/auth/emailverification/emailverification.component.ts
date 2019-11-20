import { Component, OnInit } from '@angular/core';
import verifyOTP from '../../../model/auth/verifyOTP'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.scss']
})
export class EmailverificationComponent implements OnInit {
  modal1:boolean=true;
  modal2:boolean=false;
  verificationform:FormGroup;
  emailform:FormGroup;
  submitted:boolean=false;
  issubmitted:boolean=false;
  formdata:verifyOTP={};
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    debugger
    
    
      this.emailform=this.fb.group({
        email: [null, [Validators.required, Validators.email]],
      })
    
    this.verificationform=this.fb.group({
      otp:[null,Validators.required]
   })
    
    
  }
  get f() { return this.verificationform.controls; }
  get emailf() { return this.emailform.controls; }
  
  checkotp(){
    debugger;
    this.issubmitted=true;
    if(this.verificationform.valid==true){
      //this.formdata.Email=this.verificationform.value.email;
       this.formdata.Otp=this.verificationform.value.otp;
       this.authservice.verifyOtp(this.formdata).subscribe(data=>{
         debugger
         if(data==1){  
          this.router.navigate(['login']);
           this.toaster.success("Now your are a verified user, please login again",'welcome!.....');                         //otp is verified
         
         }
        else if(data== -1){                     //otp is expired
          this.toaster.error("OTP is expired");
          this.verificationform=this.fb.group({
            otp:''
           })
        }
         else{
           this.toaster.error("Invalid OTP")
           this.verificationform=this.fb.group({
            otp:''
           })
           this.router.navigate(['/verify']);
         }
       },err=>{
          console.log(err);
       })
    }
     this.verificationform.invalid
     return;
  }
  
  Continue(){
    debugger;
    this.submitted=true;
  
    if(this.emailform.valid==true){
      this.spinner.show();
      this.formdata.Email=this.emailform.value.email;
       this.authservice.verifyEmail(this.formdata).subscribe(data=>{
         debugger
         if(data==1){  
           this.spinner.hide() 
          this.router.navigate(['login'])                                //email verified
          this.toaster.error("email is already verified,please enter correct email")  
         }
         else if(data==-1) {
           this.spinner.hide()                                           // email found but not verified
          this.modal1=false;
          this.modal2=true;
         }
         else{
           this.spinner.hide();
           this.toaster.error("Email address does not registered, Please enter correct email address");
           this.verificationform=this.fb.group({
            email:''
           })
         }
       },err=>{
          console.log(err);
       })
    }
     this.emailform.invalid
     return;
  }

  resend(){
   this.authservice.resendOTP(this.formdata).subscribe(data=>{
    if(data==1){
      alert("email has sent to your account please check your email Id");
     }
     if(data==-1){
       alert("OTP can't be sent to your account/invalid email");
     }
   })
  }
}






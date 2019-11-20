import { Component, OnInit } from '@angular/core';
import login from '../../../model/auth/login';
import {AuthService} from '../../../services/auth/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthguardGuard} from '../../../guards/authguard.guard'
import { from } from 'rxjs';
import {ToastrService} from 'ngx-toastr'
import {jwt_decode} from 'jwt-decode';
import { BehavioursubjectService } from 'src/app/services/behavioursubject/behavioursubject.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  submitted:boolean=false;
  formdata:login={};

  // checked:true;
  valueemail:string;
  valuepass:string;
  isChecked:boolean;
  //theCheckbox:boolean
 // marked:boolean;
 

  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService ,
    private toaster:ToastrService, private dataservice : BehavioursubjectService) { }

  ngOnInit() {
    debugger
    this.valueemail=window.localStorage.getItem('username');
    this.valuepass=window.localStorage.getItem('password')
    this.loginform= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      pin:['',Validators.required],  
    });



    if((this.valueemail!="" && this.valueemail!=null)||(this.valuepass="" && this.valuepass!=null)){
      this.loginform= this.fb.group({
        email:[this.valueemail,[Validators.required,Validators.email]],
        pin:[this.valuepass,Validators.required]
      });
    }

    
   
}
get f() { return this.loginform.controls; }

login(){
  debugger
  this.submitted = true;
  // stop here if form is invalid
  if (this.loginform.valid) {
    this.formdata.Email=this.loginform.value.email;
    this.formdata.Pin=this.loginform.value.pin;

     if(this.isChecked==true){                                          //checkboxvalue 
      localStorage.setItem("username",this.formdata.Email)  
      localStorage.setItem("password",this.formdata.Pin) 
     }
     else{
       localStorage.removeItem('username');
       localStorage.removeItem('password');
     }
         

    this.authservice.login(this.formdata).subscribe(data=>{
      debugger;
      this.formdata=data;
      window.localStorage.setItem("accountid",this.formdata.AccountId.toString());

     if(this.formdata.Id==1){                                 // verified + register
      window.localStorage.setItem("authenticationToken", this.formdata.JWT);
      this.dataservice.changeState(true);
      this.router.navigate(['/dashboard']);
     }
     
     else if(this.formdata.Id==2){                             // register !verified
       this.router.navigate(['/verify']);
       this.toaster.success('you are not a verified user','please verify first');
     }

     else if(this.formdata.Id==0){
       this.toaster.error("Not a registered user")
       this.router.navigate(['/register']);                 //not register
     }

     else{
       this.toaster.error('Email and pin is invalid','Enter valid email');     //incorrect password
     }
    },err=>{
      console.log(err);
      
    })

  }
  this.loginform.invalid;
  return;
}

checkCheckBoxvalue(event){
  debugger
 // console.log(event.currentTarget.checked)
  if(event.currentTarget.checked==true){
    this.isChecked=true;
    console.log(this.isChecked)
  }
  else{
    this.isChecked=false
    console.log(this.isChecked)
  }

}
}
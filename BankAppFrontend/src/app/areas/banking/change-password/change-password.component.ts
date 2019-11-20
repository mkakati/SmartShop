import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import change from '../../../model/banking/change-password';
import { Router,ActivatedRoute } from '@angular/router';
import {BankingService} from '../../../services/banking/banking.service'
import { MustMatch } from 'src/app/shared/_directives/password_must_match/must-match.validator.module';
import {ToastrService} from 'ngx-toastr'
import { from } from 'rxjs';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changepasswordform:FormGroup;
  formdata:change={};
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private router:Router,private bankservice:BankingService,private route:ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit() {
    debugger
this.formdata.AccountId=parseInt(localStorage.getItem('accountid'));
    this.changepasswordform=this.fb.group({
      pin:['',[Validators.required,Validators.min(4)]],
      newpin:['',[Validators.required,Validators.minLength(4)]],
      cpin:['',Validators.required]
    },{
      validator: MustMatch('newpin','cpin')
    });
  }
get f(){return this.changepasswordform.controls}

resetpassword(){
  debugger
  this.submitted=true;
  if(this.changepasswordform.valid==true){
    this.formdata.NewPIN=this.changepasswordform.value.newpin;
    this.formdata.PIN=this.changepasswordform.value.pin;
    this.formdata.Cpin=this.changepasswordform.value.cpin;
    this.bankservice.changepass(this.formdata).subscribe(data=>{
      this.formdata=data;
           if(this.formdata.Id>=1){
               this.toaster.success("your password has successfully changed");
               this.validation();
             }
             else {
               this.toaster.error('Can not changed your password ,something went wrong','please verify your email again' );
               this.validation();
             }
            
    },err=>{
     this.toaster.error("Please enter correct PIN",'PIN is invalid')
     this.validation();
    })
  }
  this.changepasswordform.invalid
  return; 
}

validation(){
  this.formdata.AccountId=parseInt(localStorage.getItem('accountid'));
  this.changepasswordform=this.fb.group({
    pin:['',[Validators.required,Validators.min(4)]],
    newpin:['',[Validators.required,Validators.minLength(4)]],
    cpin:['',Validators.required]
  },{
    validator: MustMatch('newpin','cpin')
  });
}
}
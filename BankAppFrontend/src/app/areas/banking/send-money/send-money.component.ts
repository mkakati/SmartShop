import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import sendMoney from '../../../model/banking/send-money'
import { Router } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
import { ToastrService } from 'ngx-toastr';
//import Logout from '../../../model/banking/logout';
import {LogoutService} from '../../../services/logout/logout.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  modal1:boolean=true;
  modal2:boolean=false;
  modal3:boolean=false
  sendmoneyform:FormGroup;
  submitted:boolean=false;
  formdata:sendMoney={};
  //log1:Logout
  constructor(private fb:FormBuilder,private router:Router,private bankservice:BankingService,private toster:ToastrService,private logoutService:LogoutService) { }

  ngOnInit() {
    debugger;
    this.formdata.AccountId=parseInt(localStorage.getItem("accountid"));
    //this.validationcheck();
    this.sendmoneyform=this.fb.group({
      accountno:[null],
      balance1:[null],
      pin:[null]
    })
    }  

    validationcheck(){
      this.sendmoneyform=this.fb.group({
        accountno:[null,Validators.required],
        balance1:[null,Validators.required],
        pin:[null,Validators.required]
      })
    }
  
  get f() { return this.sendmoneyform.controls; }

  Continue(){
    debugger;
    this.submitted=true;
    if(this.sendmoneyform.valid==true){
      this.formdata.AddBalance=this.sendmoneyform.value.balance1;
      this.formdata.AccountNo=this.sendmoneyform.value.accountno;
      this.formdata.Pin=this.sendmoneyform.value.pin;
      
      this.bankservice.sendMoney(this.formdata).subscribe(data=>{
        if(data==1){
         this.toster.success('Thank you for using our service,for futher information go to transaction history.',' your money has successfully transferred');
         this.router.navigate(['dashboard']);
         this.validationcheck();

        }
        else if(data==-1){
          this.toster.error("money can't be sent successfully");
         this.validationcheck();
        }

        else if(data==-2){
          this.toster.error("sender account not found");
         this.validationcheck()
        }
        else if(data==-3){
          this.toster.error("Incorrect Pin");
          this.validationcheck();
        }
        else{
          this.toster.error("transaction has failed");
          this.validationcheck();
        }
      },err=>{
        if(err.status==400){
          this.logoutService.logout();
        }
      })
    }
    this.sendmoneyform.invalid
    return;
  }

  verifyAccount(value:string){
    debugger
    if(value!=null && value!=undefined && value!=""){
    this.formdata.AccountNo=value;
   this.bankservice.verifyAccount(this.formdata).subscribe(data=>{
     debugger;
     if(data==1){                            //account no.found or verified 
     }
     else if(data==-1){                           //account no.found or not verified 
      this.toster.error("not a averified one")
     }
     else{
      this.toster.error("Account no.doesn't exist");
       this.validationcheck();
     }
   },err=>{
     console.log(err);
   })
  }
  else{
    this.toster.error('please enter account number')
  }
  }
  
  verifyBalance(balance:number){
    debugger;
    if(balance!=null && balance!=undefined && balance.toString()!=""){
    this.formdata.AddBalance=balance;
    this.bankservice.verifyBalance(this.formdata).subscribe(data=>{
      debugger
      if(data==1){
       
      }
      else{
        this.toster.error("Balance is not sufficient");
        this.validationcheck();
      }
    },err=>{
      console.log(err);
    })
  }
  else{
    this.toster.error('please enter some amount')
  }
}
}

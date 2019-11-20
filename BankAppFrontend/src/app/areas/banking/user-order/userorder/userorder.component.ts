import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
import { ToastrService } from 'ngx-toastr';
import {UserOrder} from '../../../../model/banking/user-order';
import { from } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrls: ['./userorder.component.scss']
})
export class UserorderComponent implements OnInit {
  userorderform:FormGroup;
  submitted:boolean=false;
  formdata:UserOrder={};
  constructor(private fb:FormBuilder,private router:Router,private bankservice:BankingService,private toster:ToastrService,private routers:ActivatedRoute,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    debugger
 this.routers.queryParams.subscribe(params=>{
   if(params!=undefined){
     console.log(params);
     this.formdata.Amount = parseInt(params['TotalAmount']);
     this.formdata.OrderId =parseInt( params['OrderId']);
    // this.formdata.Amount = parseInt(params.get('amount'));
    // this.formdata.OrderId = parseInt(params.get('orderid'));
   }
   
});
this.initialvalue();
  }

initialvalue(){
  this.userorderform=this.fb.group({
    accountno:[null,Validators.required],
    otp:[null,Validators.required]
   });
}
  
  get f() { return this.userorderform.controls; }

  verifyAccount(value:string){
    debugger;
   
    if(value!=null && value!=undefined && value!=""){
      this.spinner.show();
      this.bankservice.verifyuseraccount(value).subscribe(data=>{
        if(data=='Success'){
          this.spinner.hide()
          this.toster.success('OTP has sent to your email','please check your email for OTP');
        }
        else{
          this.spinner.hide()
          this.toster.error('Account number does not exist','please enter a valid account number' );
          this.ngOnInit();
        }
      })
    }
    else{
      this.toster.error('please enter account number first');
    }
   
  }

  continue(){
    debugger
    this.submitted=true;
    if(this.userorderform.valid==true){
      this.formdata.AccountNo=this.userorderform.value.accountno;
      this.formdata.OTP=this.userorderform.value.otp;
      this.bankservice.userorder(this.formdata).subscribe(data=>{
        this.formdata=data;
        if(this.formdata.Id>0)
        {
          console.log(data);
          window.top.location.href =  "http://localhost:4200/buyer/afterpayment?TransactionId="+this.formdata.TransactionId +"&OrderId="+this.formdata.OrderId+"&Message="+this.formdata.Message+"&Amount="+this.formdata.Amount;
          this.ngOnInit();
        }
        else if(this.formdata.Id==-100){
          console.log(data);
          this.toster.error("Insufficient Balance",'Sorry')
          this.ngOnInit();
        }
        else if(this.formdata.Id==-500){
          console.log(data);
          this.toster.error('OTP has expired','Please try again');
          this.ngOnInit();
        }
        else {
          console.log(data);
          this.toster.error('Please check your email for correct OTP ','Invalid OTP');
          this.ngOnInit();
        }
      },err=>{
console.log(err);
      })
    }  
  }
  Cancel(){
    this.formdata.CancelMessage='canceltransaction';
    window.top.location.href =  "http://localhost:4200/buyer/afterpayment?message="+this.formdata.CancelMessage;
  }
 }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankingService } from 'src/app/services/banking/banking.service';
import { Router } from '@angular/router';
import linkaccount from '../../../model/banking/linkaccount'
import { from } from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-link-account',
  templateUrl: './link-account.component.html',
  styleUrls: ['./link-account.component.scss']
})
export class LinkAccountComponent implements OnInit {
  linkaccountform:FormGroup;
  formdata:linkaccount={};
  submitted:boolean= false;
  constructor(private fb:FormBuilder,private bankservice:BankingService,private router:Router,private toaster:ToastrService ) { }

  ngOnInit() {
    debugger
    // this.linkaccountform=this.fb.group({
    //   accountno:['',Validators.required],
    //   pin:['',[Validators.required,Validators.maxLength(4)]]
    // })
    this.formdata.AccountId=parseInt(localStorage.getItem('accountid'));
    this.validation();
  }
validation(){
  this.linkaccountform=this.fb.group({
    accountno:['',Validators.required],
    pin:['',[Validators.required,Validators.maxLength(4)]]
  })
}
  get f(){return this.linkaccountform.controls};

  Continue(){
    debugger
    this.submitted=true;
    if(this.linkaccountform.valid==true){
      this.formdata.Accountno=this.linkaccountform.value.accountno;
      this.formdata.PIN=this.linkaccountform.value.pin;
      this.bankservice.linkaccount(this.formdata).subscribe(data=>{
        this.formdata=data;
        if(this.formdata.Id==1){
          this.toaster.success('your account has linked Successfully ');
         // this.router.navigate([''])
         window.top.location.href =  "http://localhost:4200/bankconfirmation?AccountId="+this.formdata.AccountId;
        }
        else{
          this.toaster.error('Something went wrong');
          this.validation();
        }
      },err=>{
        console.log(err);
      })
    }
  }

}

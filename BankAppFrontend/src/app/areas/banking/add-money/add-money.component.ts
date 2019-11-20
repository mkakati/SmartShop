import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import AddMoney from 'src/app/model/banking/add-money';
import { Router } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
import {ToastrService} from 'ngx-toastr';
import personal from '../../../model/banking/personal-detail';
import { from } from 'rxjs';
//import logout from '../../../model/banking/logout'
import {LogoutService} from '../../../services/logout/logout.service'

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
  
  addbalanceform:FormGroup;
  submitted:boolean=false;
  formdata:AddMoney={};
  formdata1:personal={};
  
  constructor(private fb:FormBuilder,private router:Router,private bankservice:BankingService,private toaster:ToastrService,private logoutService:LogoutService) { }

  ngOnInit() {
    debugger
    this.formdata1.AccountId=parseInt(localStorage.getItem("accountid"));
    this.formdata.AccountId=parseInt(localStorage.getItem("accountid"));
    this.bankservice.detail(this.formdata1.AccountId).subscribe(data=>{
      if(data!=null){
        this.formdata1=data;
      }
    },err=>{
        if(err.status==400){
          this.logoutService.logout();
        }
    })
      this.addbalanceform=this.fb.group({
        addbalance:[null,Validators.required],
        pin:[null,Validators.required]
      })
    }  
  
  get f() { return this.addbalanceform.controls; }

  Continue(){
    this.submitted=true;
    if(this.addbalanceform.valid==true){
      this.formdata.Addbalance=this.addbalanceform.value.addbalance;
      this.formdata.PIN=this.addbalanceform.value.pin;

      this.bankservice.addMoney(this.formdata).subscribe(data=>{
        if(data==1){
         this.toaster.success("Balance is added to your account");
         this.addbalanceform=this.fb.group({
          addbalance:[null,Validators.required],
          pin:[null,Validators.required]
        })
      
        this.formdata1.AccountId=parseInt(localStorage.getItem("accountid"));
        this.bankservice.detail(this.formdata1.AccountId).subscribe(data=>{
          if(data==1){
            this.formdata1=data;
          }
        })
        }
        
        else if(data=='Error'){
          this.toaster.error("transaction has failed");
        }
        else{
          this.toaster.error(' check your PIN','invalid PIN');
          this.addbalanceform=this.fb.group({
            addbalance:[null,Validators.required],
            pin:[null,Validators.required]
          }) 
        }

      },err=>{
       console.log(err);
       
      })
    }
    this.addbalanceform.invalid
    return;
  }
}

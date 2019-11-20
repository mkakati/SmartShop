import { Component, OnInit } from '@angular/core';
import CheckBalance from 'src/app/model/banking/check-balance';
import { Router } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
import { tryParse } from 'selenium-webdriver/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { JsonPipe } from '@angular/common';
import {ToastrService} from 'ngx-toastr'
import {LogoutService} from '../../../services/logout/logout.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.scss']
})
export class CheckBalanceComponent implements OnInit {
 formdata:CheckBalance={};
  constructor(private router:Router,private bankservice:BankingService,private toaster:ToastrService,private logoutService:LogoutService) { }

  ngOnInit() {
    debugger
    this.formdata.AccountId=parseInt(localStorage.getItem("accountid"));
    // this.data= JSON.parse(localStorage.getItem("personDetail"));
     // this.final=JSON.parse(this.data);
    this.formdata.AccountNo=localStorage.getItem("accountno");
    this.bankservice.checkBalance(this.formdata.AccountId).subscribe(data=>{
    
      if(data!=null)
      {
     this.formdata.Balance=parseInt(data.toString());
    
      }
      else
      {
        this.toaster.error("no balance");
      }
    },err=>{
      if(err.status==400){
        this.logoutService.logout();
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
import Transaction from '../../../model/banking/transaction-history';
//import Logout from '../../../model/banking/logout'
import {LogoutService} from '../../../services/logout/logout.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
formdata:Transaction[]=[];
formdata1:Transaction={}
pageSizeOptions: number[] = [1, 5, 10, 20];
//AccountId:number;
Emptylist: boolean = true;
isMatGrid: boolean = true;
pageSize: Number = 10;
length:number =5;
displayedColumns: string[] = ['Date', 'Credit', 'Debit', 'Balance', 'Status', 'Comments'];
dataSource : any;
//log1=Logout;
  constructor(private route:Router,private bankservice:BankingService,private logoutService:LogoutService) { }

  ngOnInit() {
    debugger
  this.formdata1.AccountId=parseInt(localStorage.getItem('accountid'));
  this.formdata1.Limit=10;
  this.formdata1.Offset=1;
  this.formdata1.Order='desc';
  this.formdata1.Sort='';
  this.gettransactionadata(this.formdata1);
  }

  getServerDataNotes(pageSize) {
    debugger;
    console.log(pageSize);
    this.formdata1.Offset = pageSize.pageIndex+1;
    this.formdata1.Limit = pageSize.pageSize;
     this.gettransactionadata(this.formdata1)
  }

  gettransactionadata(formdata1)
  {
    this.formdata=[];
    this.bankservice.transactionhistory(this.formdata1).subscribe(data=>{
      debugger;
      if(data!=null){
      //  this.formdata=[];
        this.formdata.push(data);
   
       this.length = this.formdata[0][0].TotalRows; 
       this.pageSize=this.formdata1.Limit;
          this.dataSource = this.formdata[0];
        console.log(this.dataSource)
  
      }
     },err=>{
       console.log(err);
       if(err.status==400){
         this.logoutService.logout()
       };
      })
    }
  }













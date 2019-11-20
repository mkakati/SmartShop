import { Component, OnInit } from '@angular/core';
import PersonDetail from '../../../model/banking/personal-detail'
import { Router } from '@angular/router';
import { BankingService } from 'src/app/services/banking/banking.service';
//import Logout from '../../../model/banking/logout';
import {ToastrService} from 'ngx-toastr';
import {UserIdleService} from 'angular-user-idle';
import {LogoutService} from '../../../services/logout/logout.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
 //formdata:PersonDetail=new PersonDetail();
 formdata:PersonDetail={};
 //log1 : any;
  constructor(private router:Router,private bankservice:BankingService,private toaster:ToastrService, private idleservice:UserIdleService,private logoutService:LogoutService) { 
    //this.log1 = new Logout( router,toaster);
  }
 
  ngOnInit() {

    //  this.idleservice.startWatching(600).subscribe(res => {
  
    //  })

    //   if (res === true) {
    //   localStorage.clear();
    //   sessionStorage.clear();
    
    //   this.router.navigate(['/login'])
    //   }
    //   else {
    //   if (localStorage.length == 0)
    //   this.router.navigate(['/login'])
    //   }
    //   })
   this.formdata.AccountId=parseInt( localStorage.getItem("accountid"));
   
    this.bankservice.detail(this.formdata.AccountId).subscribe(data=>{
      debugger
  
     if(data!=null){
        this.formdata=data;
       // window.localStorage.setItem("personDetail",JSON.stringify(data));
       window.localStorage.setItem("accountno",this.formdata[0].AccountNo+"");
      }
      
     else{
          this.toaster.error("no details");
          }
    },err=>{
      if(err.status==400){
        this.logoutService.logout()
      }
    })
  }
}

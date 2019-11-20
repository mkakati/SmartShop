import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginSellerService } from '../services/loginseller.service';
import { sellerotp } from './sellerotp';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sellerotp',
  templateUrl: './sellerotp.component.html',
  styleUrls: ['./sellerotp.component.css']
})
export class SellerotpComponent implements OnInit {

  constructor(private toaster:ToastrService,private fb:FormBuilder,private service:LoginSellerService,private router:Router) { }
  apires:any;
  message=null;
  ngOnInit() {
  }

  onetimepass=this.fb.group({
    otp:['',[Validators.required,Validators.minLength(6),Validators.pattern]]
  })

  get otp(){
    return this.onetimepass.get('otp');
  }


  
onSubmit() {
  
  // if (!this.loginForm.valid) {
  //   return false;
  // } else {
    const add=this.onetimepass.value;
     this.Verifysellerotp(add);
   
    
  }
  Verifysellerotp(onetimepass:sellerotp){
      this.service.Verifysellerotp(onetimepass).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.toaster.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.toaster.success(this.apires.Message);
            localStorage.removeItem("token");
            localStorage.setItem("token",this.apires.data.token);
            this.router.navigateByUrl('add-pro');
          }  
      }));
}

}

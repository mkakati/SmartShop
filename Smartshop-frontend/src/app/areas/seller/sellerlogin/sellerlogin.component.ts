import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { addsellerlogin } from './addsellerlogin'
import { LoginSellerService  } from '../services/loginseller.service';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {

  
  apires:any;
  message=null;
  constructor(private fb:FormBuilder,private service:LoginSellerService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
  if(this.service.isAuthorized())  
  {
   this.router.navigateByUrl('/add-pro');
  }
  
  }

  loginForm = this.fb.group({
    Email:  ['', [Validators.required,Validators.pattern]],
    Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  });

get Email(){
  return this.loginForm.get('Email');
}
  
get Password(){
  return this.loginForm.get('Password');
}

onSubmit() {
  
  // if (!this.loginForm.valid) {
  //   return false;
  // } else {
    const add=this.loginForm.value;
     this.Createloginn(add);
   
    
  }
    Createloginn(loginForm:addsellerlogin){
      this.service.Createloginn(loginForm).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.message=this.apires.Message;
          }
          else if(this.apires.StatusCode==200){
            this.message=this.apires.Message;
            localStorage.setItem("token",this.apires.data.token);
            this.toastr.success("success");
            
            const isAuthorized = this.service.isAuthorized();
            if (isAuthorized) {
              // if not authorized, show access denied message
              this.router.navigate(['/add-pro']);
            }
            
            else {
              localStorage.removeItem("token");
              this.router.navigate(['/sellerlogin']);
            }
            
            
          }  
          
      }));
    
}

}

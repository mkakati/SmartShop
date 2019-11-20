import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { addlogin } from './addlogin';
import { AddDataService } from '../service/add-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apires:any;
  message=null;

  
  constructor(private fb:FormBuilder,private service:AddDataService,private router:Router,private toastr:ToastrService) {}

  ngOnInit() {
    debugger;
    if(this.service.isAuthorized())  
    {
     this.router.navigateByUrl('/admin');
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
    const add=this.loginForm.value;
     this.Createlogin(add);
  }

    Createlogin(loginForm:addlogin){
      this.service.Createlogin(loginForm).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){  
            this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            debugger;
            this.toastr.success(this.apires.Message);
            localStorage.setItem("token",this.apires.data.token);
          
            //this.router.navigateByUrl('homepage');
            const isAuthorized = this.service.isAuthorized();
            if (isAuthorized) {
              // if not authorized, show access denied message
              this.router.navigate(['/admin']);
            }
             
            else {
            
              this.router.navigate(['/homepage']);
            }
          }  
      }));
}
}

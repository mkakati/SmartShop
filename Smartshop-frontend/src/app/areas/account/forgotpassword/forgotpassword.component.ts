import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {forgetpassword} from './forgetpassword';
import {AddDataService} from '../service/add-data.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  apires:any;
  message=null;
  constructor(private spinner: NgxSpinnerService,private fb:FormBuilder,private forgetservice:AddDataService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }

forgot=this.fb.group({
Email:['',[Validators.required,Validators.pattern]]
})


get Email(){
  return this.forgot.get('Email');
}


onSubmit() {
  
  this.spinner.show();
    const add=this.forgot.value;
     this.forgetpassword(add);
   
    
  }
  forgetpassword(forgot:forgetpassword){
    debugger;
      this.forgetservice.forgetpassword(forgot).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.spinner.hide();
            this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.spinner.hide();
            this.toastr.success(this.apires.Message);
            localStorage.setItem("Email",this.Email.value);
            this.router.navigateByUrl('/account/forgetpasswordtootp');
          }  
      }));
}
}


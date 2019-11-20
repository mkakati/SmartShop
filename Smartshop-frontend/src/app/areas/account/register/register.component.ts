import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Register } from './add';
import { AddDataService } from '../service/add-data.service';
import { Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';    
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  //  data=false;
    message=null;
    loading=false;

  constructor(private spinner: NgxSpinnerService,private fb:FormBuilder,private service:AddDataService,private router:Router,private toastr: ToastrService) { }
 
 
  apires:any;
 ngOnInit() {
  
   }
   
//       //form builder
    register=this.fb.group({
     FirstName:['',[Validators.required,Validators.pattern]],
     LastName:['',[Validators.required,Validators.pattern]],
      Email:['',[Validators.required,Validators.pattern]],
     Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      Mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern]]

    });

    get FirstName() {
     return this.register.get('FirstName');
   }

   get LastName() {
     return this.register.get('LastName');
   }
   get Email() {
     return this.register.get('Email');
   }
   get Password() {
     return this.register.get('Password');
   }
   
   get Mobile() {
     return this.register.get('Mobile');
   }

   onSubmit(){
     this.spinner.show();
    const add=this.register.value;
    this.Createregister(add);
    //debugger;
    
    
   
   }
   Createregister(register:Register){
     this.service.Createregister(register).subscribe(
       (response=>{
         this.apires=response;
         console.log(this.apires);
         if(this.apires.StatusCode==400){
          this.spinner.hide();
         // this.message=this.apires.Message;
          this.toastr.error(this.apires.Message);
        }
        else if(this.apires.StatusCode==200){
          this.spinner.hide();
       // this.toastr.success(this.apires.Message);
         // this.message=this.apires.Message;
          localStorage.setItem("token",this.apires.data.token);
      
          this.router.navigateByUrl('account/otp');
         
        } 
       })); 
        
     }
   }
   



import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Register } from './registrationseller'
import { LoginSellerService  } from '../services/loginseller.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sellerregistration',
  templateUrl: './sellerregistration.component.html',
  styleUrls: ['./sellerregistration.component.css']
})
export class SellerregistrationComponent implements OnInit {
 

 
      message=null;
  
    constructor(private fb:FormBuilder,private service:LoginSellerService,private router:Router,private spinner: NgxSpinnerService,private toastr: ToastrService) { }

    optionsSelect: Array<any>;
    apires:any;
   ngOnInit() {
   
     }
     
  //       //form builder
       register=this.fb.group({
       FirstName:['',[Validators.required,Validators.pattern]],
       LastName:['',[Validators.required,Validators.pattern]],
       Email:['',[Validators.required,Validators.pattern]],
       Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
       Mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern]],
       GSTNo:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
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
     get GSTNo() {
       return this.register.get('GSTNo');
     }
     get Mobile() {
       return this.register.get('Mobile');
     }
  
     onSubmit(){
       // if (!this.register.valid) {
       //   return false;
       // } else {
        this.spinner.show();
      const add=this.register.value;
      this.Createregisterr(add);
      debugger;
      
     
     }
     Createregisterr(register:Register){
       this.service.Createregisterr(register).subscribe(
         (response=>{
           this.apires=response;
           console.log(this.apires);
           if(this.apires.StatusCode==400){
            this.spinner.hide();
          //  this.message=this.apires.Message;
          this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.spinner.hide();
           // this.toastr.success(this.apires.Message);

            localStorage.setItem("token",this.apires.data.token);
            this.router.navigateByUrl('seller/sellerotp');
            
          } 
         })); 
          
       }
        

}

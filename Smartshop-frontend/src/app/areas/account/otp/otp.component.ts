import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddDataService } from '../service/add-data.service';
import { Otp } from './otp';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:AddDataService,private router:Router,private toastr:ToastrService) { }
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
  
    
      const add=this.onetimepass.value;
       this.Verifyotp(add);
     
      
    }
    Verifyotp(onetimepass:Otp){
        this.service.Verifyotp(onetimepass).subscribe
          ( (response=>{
            this.apires=response;
            console.log(this.apires);   
            if(this.apires.StatusCode==400){
              this.toastr.success(this.apires.Message);
            }
            else if(this.apires.StatusCode==200){
              this.toastr.success(this.apires.Message);
              localStorage.removeItem("token");
              localStorage.setItem("token",this.apires.data.token);
             this.router.navigateByUrl('homepage');
            
            }  
        }));
  }
  }

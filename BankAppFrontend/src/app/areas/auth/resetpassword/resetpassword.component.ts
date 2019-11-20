import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Forgotpass from 'src/app/model/auth/forgotpass';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth/auth.service';
import { MustMatch } from 'src/app/shared/_directives/password_must_match/must-match.validator.module';
import {ToastrService} from 'ngx-toastr'
import { from } from 'rxjs';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordform:FormGroup;
  formdata:Forgotpass={};
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService,private route:ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit() {
    debugger
    this.route.queryParams.subscribe(params=>{
      if(params!=null){
        this.formdata.Guid= params['resetcode'];
      } 
    })

    this.resetpasswordform=this.fb.group({
    pin:['',[Validators.required,Validators.min(4)]],
      cpin:['',Validators.required]
    },{
      validator: MustMatch('pin','cpin')
    });
  }
get f(){return this.resetpasswordform.controls}

resetpassword(){
  debugger
  this.submitted=true;
  if(this.resetpasswordform.valid==true){
    this.formdata.PIN=this.resetpasswordform.value.pin;
    this.formdata.Cpin=this.resetpasswordform.value.cpin;
    this.authservice.resetpass(this.formdata).subscribe(data=>{
      this.formdata=data;
           if(this.formdata.Id==1){
               this.toaster.success("your password has successfully changed");
               
               this.router.navigate(['login']);
             }
             else if(this.formdata.Id== -1){
               this.toaster.error('Can not changed your password ,something went wrong','please verify your email again' );
             }
             else{
               this.toaster.error('Something went wrong');
             }
    },err=>{
      console.log(err);
    })
  }
  this.resetpasswordform.invalid
  return; 
}
}

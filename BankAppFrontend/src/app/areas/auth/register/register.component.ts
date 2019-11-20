import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators,ReactiveFormsModule , MaxLengthValidator} from '@angular/forms';
import{AuthService} from '../../../services/auth/auth/auth.service';
import{MustMatch} from '../../../shared/_directives/password_must_match/must-match.validator.module';
import register from '../../../model/auth/register';

import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //public pinMask =[/[0-9]/, /[0-9]/, /\d/, /\d/];
 
  registerForm: FormGroup;
  submitted :boolean= false;
  formdata:register={};
  constructor(private fb: FormBuilder,private router:Router,private authservice:AuthService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

ngOnInit() {

  this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     // mobile:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pin: ['',[Validators.required, Validators.maxLength(4)]],
      cpin: ['', Validators.required]
  }, {
      validator: MustMatch('pin', 'cpin')
  });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

showdata() {
  debugger
  this.submitted = true;
 
  // stop here if form is invalid
  if (this.registerForm.valid) {
    this.spinner.show();
   this.formdata.FirstName=this.registerForm.value.firstName;
   this.formdata.LastName=this.registerForm.value.lastName;
   this.formdata.Email=this.registerForm.value.email;
   this.formdata.Pin=this.registerForm.value.pin;
   this.formdata.Cpin=this.registerForm.value.cpin;
   this.authservice.register(this.formdata).subscribe(data=>{
     debugger;
      if(data=="Success"){
      this.spinner.hide();
        this.toaster.success('you have registered successfully ,please verify your acccount OTP has sent to your registered emailId','WELCOME');
        this.router.navigate(['verify']);
      }
      else if (data=="Fail"){
        this.spinner.hide();
        this.toaster.error("OTP not sent");
        console.log("Fail");
      }
      else if(data==-1){
        this.spinner.hide();
        this.toaster.error("Email Id already exist,please enter another email Id");
        this.registerForm = this.fb.group({
          firstName: '',
          lastName: '',
          email: '',
          pin: '',
          cpin: '',
      })
      }
      else{
        this.toaster.error("user not registered");
      }
   },err=>{
     console.log(err);
   })


  }
 
  this.registerForm.invalid;
  return;
  
}
Cancel(){
  this.router.navigate(['/home'])
}
}


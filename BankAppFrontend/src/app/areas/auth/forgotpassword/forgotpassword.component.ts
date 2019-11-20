import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Forgotpass from 'src/app/model/auth/forgotpass';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth/auth.service';
import { MustMatch } from 'src/app/shared/_directives/password_must_match/must-match.validator.module';
import { EmitType } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  emailverificationform:FormGroup;
  submitted:boolean=false;
  formdata:Forgotpass={};
  istrue:boolean=true;
 
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit() {

      this.emailverificationform=this.fb.group({
        email: ['', [Validators.required, Validators.email]],
      }) 
  }
  get f() { return this.emailverificationform.controls; }

  showdata(){
    debugger
    this.submitted=true;
    if(this.emailverificationform.valid==true){
      this.spinner.show();
      this.formdata.Email=this.emailverificationform.value.email;
      this.authservice.sendemail(this.formdata).subscribe(data=>{
        if(data=='Success'){
        this.spinner.hide();
         this.istrue=false;
        this.toaster.success("Email has sent to your registered mailId, please check your email");
        this.emailverificationform=this.fb.group({
          email: ''
        })
        }
        else{
          this.spinner.hide()
          this.toaster.error("Email is invalid");
        }
      },err=>{
        console.log(err);
      })
    }
    this.emailverificationform.invalid
    return
  }

  initialize(){
    this.emailverificationform=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
   
  }
  // @ViewChild('modalDialog', {static: false})
  // public modalDialog: DialogComponent;
  // //public overlay: CheckBoxComponent;
  // public target: string = "#modalTarget";
  // public width: string = '335px';
  // public header: string = 'Please check your email';
  // public content: string = 'OTP has sent to your registered emailID';
  // public isModal: Boolean = true;
  // public animationSettings: Object = { effect: 'None' };
  // public hide: any;    

  // // Close the Dialog, while clicking "OK" Button of Dialog
  // public dlgButtonClick: EmitType<object> = () => {
  //     this.modalDialog.hide();
  //     this.initialize();
  // }

  // public overlayClick: EmitType<object> = () => {
  //         this.modalDialog.hide();
  // }

  // // Initialize Button to open the modal Dialog
  // public buttons: Object[] = [{
  //    click: this.dlgButtonClick.bind(this),
  //     buttonModel: { content: 'OK', isPrimary: true } 
  //   }];


}

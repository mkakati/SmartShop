import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDataService } from '../service/add-data.service';
import { change } from './changepassword';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  apires:any;
  message=null;
  constructor(private fb:FormBuilder,private router:Router,private service:AddDataService,private toastr:ToastrService) { }

  ngOnInit() {
  }

changepassword=this.fb.group({
  OldPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  NewPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]
})

get OldPassword(){
  return this.changepassword.get('OldPassword');
}


get NewPassword(){
  return this.changepassword.get('NewPassword');
}



onSubmit() {
  
  
  const add=this.changepassword.value;
   this.change(add);
 
  
}
change(changepassword:change){
    this.service.changepassword(changepassword).subscribe
      ( (response=>{
        this.apires=response;
        console.log(this.apires);   
        if(this.apires.StatusCode==400){
         this.toastr.error(this.apires.Message);
        }
        else if(this.apires.StatusCode==200){
          this.toastr.success(this.apires.Message);
          //localStorage.setItem("token",this.apires.data.token);
          this.router.navigateByUrl('homepage');
        }  
    }));
}
}

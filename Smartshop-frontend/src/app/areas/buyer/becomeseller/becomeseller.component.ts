import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
 import {buyertoseller} from './becomeseller';
import { Router } from '@angular/router';
import {BecomesellerService} from './becomeseller.service'

@Component({
  selector: 'app-becomeseller',
  templateUrl: './becomeseller.component.html',
  styleUrls: ['./becomeseller.component.css']
})
export class BecomesellerComponent implements OnInit {

apires:any;
message=null;
  constructor(private fb:FormBuilder,private router:Router,private buyerservice:BecomesellerService) { }

  ngOnInit() {
  }


  becomesellerform=this.fb.group({
    GST:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern]]
  })

  
  get GST(){
    return this.becomesellerform.get('GST');  
  }


  
onSubmit() {
  
 
    const add=this.becomesellerform.value;
     this.Becomeseller(add);
   
    
  }
  Becomeseller(becomesellerform:buyertoseller){
      this.buyerservice.Becomeseller(becomesellerform).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){
            this.message=this.apires.Message;
          }
          else if(this.apires.StatusCode==200){
            this.message=this.apires.Message;
            localStorage.removeItem("token");
            localStorage.setItem("token",this.apires.data.token);
            this.router.navigateByUrl('/add-pro');
          }  
      }));
}
}

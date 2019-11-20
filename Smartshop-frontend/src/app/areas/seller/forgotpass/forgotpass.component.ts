import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

forgot=this.fb.group({
Email:['',[Validators.required,Validators.pattern]]
})


get Email(){
  return this.forgot.get('Email');
}

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import {checkout} from '../checkout/checkout';
import {BuyerserviceService }from '../buyerservice.service'
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner'
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router:Router,private spinner:NgxSpinnerService,private httpservice:HttpClient,private fb:FormBuilder,private service:BuyerserviceService,private toastr:ToastrService) { }
  response;
  mycart;
  getaddress;
  total;
  radioval;
  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token') 
      })
    };
    this.httpservice.get('http://localhost:54673/api/Buyer/ViewCartItems',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.mycart);
       this.mycart=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
    this.httpservice.get('http://localhost:54673/api/Address/GetAddressByBuyerId',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.getaddress);
       this.getaddress=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 

    this.httpservice.get(' http://localhost:54673/api/Buyer/GetCartTotal',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.total);
       this.total=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }

  checkout=this.fb.group({
    FlatNo:['',[Validators.required,Validators.pattern]],
    AddressLine1:['',[Validators.required]],
    AddressLine2:[''],
    City:['',[Validators.required,Validators.pattern]],
    State:['',[Validators.required,Validators.pattern]],
    PIN:['',[Validators.required,Validators.pattern]]

  });


  get FlatNo(){
  return this.checkout.get('FlatNo');
  }

  get AddressLine1(){
    return this.checkout.get('AddressLine1');
    }

  get AddressLine2(){
    return this.checkout.get('FlatNo');
    }

  get City(){
    return this.checkout.get('City');
    }
     
  get State(){
    return this.checkout.get('State');
     }

  get PIN(){
    return this.checkout.get('PIN');
  }


  apires:any;
  onSubmit() {
    const add=this.checkout.value;
     this.addaddress(add);
  }

  addaddress(checkout:checkout){
      this.service.addaddress(checkout).subscribe
        ( (response=>{
          this.apires=response;
          console.log(this.apires);   
          if(this.apires.StatusCode==400){  
            this.toastr.error(this.apires.Message);
          }
          else if(this.apires.StatusCode==200){
            this.toastr.success(this.apires.Message);
            this.ngOnInit();
            this.checkout.reset();
          }  
      }));
}

placeorder()
{
//this.spinner.show();
debugger;
this.service.Placeorder(this.radioval)  
.subscribe(
   (response=>{
    this.apires=response;
    console.log(this.apires);   
    if(this.apires.StatusCode==400){  
      this.toastr.error("please select address");
    }
    else if(this.apires.StatusCode==200){
      this.router.navigateByUrl('/buyer/payment/?OrderId='+this.apires.data.OrderId+'&TotalAmount='+this.apires.data.TotalAmount);
    }  
}));
}

onRadioChange(event){
  this.radioval=event.target.value;
}
}

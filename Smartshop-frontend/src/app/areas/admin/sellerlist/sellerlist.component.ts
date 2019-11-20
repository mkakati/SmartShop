import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sellerlist',
  templateUrl: './sellerlist.component.html',
  styleUrls: ['./sellerlist.component.css']
})
export class SellerlistComponent implements OnInit {

  constructor(private httpservice:HttpClient,private service:AdminService,private toastr:ToastrService) { }
  
  response;
  sellerlist;
  ngOnInit() {
    
    this.httpservice.get('http://localhost:54673/api/Admin/GetAllSellerApproveRequest').subscribe
    (data =>{

       this.response=data;
       console.log(this.sellerlist);
       this.sellerlist=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }

  apires;
  acceptseller(SellerId){
    debugger;
    this.service.accept(SellerId).subscribe
    ( (response=>{
      this.apires=response;
      console.log(this.apires);   
      if(this.apires.StatusCode==400){
        this.toastr.success(this.apires.Message);
      }
      else if(this.apires.StatusCode==200){
        this.toastr.success("Accepted");
     this.ngOnInit();
      }  
  }));
}

rejectseller(SellerId){
  debugger;
  this.service.reject(SellerId).subscribe
  ( (response=>{
    this.apires=response;
    console.log(this.apires);   
    if(this.apires.StatusCode==400){
      this.toastr.success(this.apires.Message);
    }
    else if(this.apires.StatusCode==200){
      this.toastr.success("Rejected");
      this.ngOnInit();
    }  
}));
}
}

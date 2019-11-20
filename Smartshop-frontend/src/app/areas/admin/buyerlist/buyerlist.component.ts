import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buyerlist',
  templateUrl: './buyerlist.component.html',
  styleUrls: ['./buyerlist.component.css']
})
export class BuyerlistComponent implements OnInit {

  constructor(private httpservice:HttpClient,private service:AdminService,private toastr:ToastrService) { }
  response;
  buyerlist;
  ngOnInit() {
    this.httpservice.get('http://localhost:54673/api/Admin/GetAllActivatedUsers').subscribe
    (data =>{

       this.response=data;
       console.log(this.buyerlist);
       this.buyerlist=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }


  apires;
  deactivatebuyer(MasterUserId){
    debugger;
    this.service.deactivate(MasterUserId).subscribe
    ( (response=>{
      this.apires=response;
      console.log(this.apires);   
      if(this.apires.StatusCode==400){
        this.toastr.error(this.apires.Message);
      }
      else if(this.apires.StatusCode==200){
        this.toastr.success("Deactivated");
     this.ngOnInit();
      }  
  }));
}
}

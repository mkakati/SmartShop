import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deactivatedbuyerlist',
  templateUrl: './deactivatedbuyerlist.component.html',
  styleUrls: ['./deactivatedbuyerlist.component.css']
})
export class DeactivatedbuyerlistComponent implements OnInit {

  constructor(private httpservice:HttpClient,private service:AdminService,private toastr:ToastrService) { }

  response;
  deactivatebuyerlist;
  ngOnInit() {
    this.httpservice.get('http://localhost:54673/api/Admin/GetAllDeactivatedUsers').subscribe
    (data =>{

       this.response=data;
       console.log(this.deactivatebuyerlist);
       this.deactivatebuyerlist=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }


  apires;
  activatebuyer(MasterUserId){
    debugger;
    this.service.activate(MasterUserId).subscribe
    ( (response=>{
      this.apires=response;
      console.log(this.apires);   
      if(this.apires.StatusCode==400){
        this.toastr.error(this.apires.Message);
      }
      else if(this.apires.StatusCode==200){
        this.toastr.success("Activated");
     this.ngOnInit();
      }  
  }));
  }
}
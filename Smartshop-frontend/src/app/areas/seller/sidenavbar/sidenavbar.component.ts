import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';
import { Router } from '@angular/router';
import { LoginSellerService } from '../services/loginseller.service';
import * as jwt_decode from 'jwt-decode';
import { HttpErrorResponse, HttpHeaders, HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  apires;
  message;
  response;
  Pdf;
  decodeToken;
  isBuyer=false;
  isSeller=false;
  isLogin=false;
  report;
  constructor(private router:Router, private service:LoginSellerService,private httpservice:HttpClient,private toastr: ToastrService) { }
  addprod(){
    this.router.navigateByUrl("add-pro");
  }
  ngOnInit() {
    this.changeflag();
  }
 logout()
 {
 
  localStorage.removeItem("token");
  this.toastr.success("Logout");
  this.router.navigate(['/seller/sellerlogin']);



 }
 becomebuyer()
 {
   
  this.service.sellertobuyer().subscribe
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
      this.router.navigateByUrl('/homepage');
    }  
}));


 }

 changeflag(){
  if(localStorage.getItem("token")){
    this.isLogin=true;
    this.decodeToken = jwt_decode(localStorage.getItem("token"));
    if(this.decodeToken.role.includes("Buyer")){
      this.isBuyer=true;
    }
    if(this.decodeToken.role.includes("Seller")){
      this.isSeller=true;
    }
  }
}
pdf()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('token')

    })
  };
 httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  this.httpservice.get('http://localhost:54673/api/Seller/Pdf',httpOptions).subscribe
  (data =>{

     this.response=data;
     console.log(this.Pdf);
     this.Pdf=this.response.data;
    // window.open(this.Pdf,"_blank"); 
     this.toastr.success("Your Pdf is downloaded Please View in Downloads");
  },
  (err: HttpErrorResponse) => {
    console.log (err.message);
  }
  );
}

Excelpdf()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/vnd.ms-excel',
      'Access-Control-Allow-Origin': '*',
      "Authorization": "Bearer " + localStorage.getItem('token'),
      'Accept':'application/vnd.ms-excel',
      reponseType: 'application/octet-stream'

    })
  };
 httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //return this.httpservice.get<Blob>('http://localhost:54673/api/Seller/GenerateExcelReports',httpOptions).pipe().subscribe();
  return this.httpservice.get<Blob>('http://localhost:54673/api/Seller/GenerateExcelReports',httpOptions).pipe().subscribe();
}



}




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  response: any;
  Pdf: any;

  constructor(private router:Router,private toastr:ToastrService,private httpservice:HttpClient) { }

  ngOnInit() {
  }



  logout(){
    localStorage.removeItem("token");
    this.toastr.success("Logout Successfully");
    this.router.navigate(["homepage"]); 
    
  }


  pdfseller()
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
    this.httpservice.get('http://localhost:54673/api/Admin/AdminSellerPdf',httpOptions).subscribe
    (data =>{
  
       this.response=data;
      
       console.log(this.Pdf);
       this.Pdf=this.response.data;
    
      this.toastr.success("PDF is downloaded Please View in Downloads");
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    );
  }
  pdfbuyer()
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
    this.httpservice.get('http://localhost:54673/api/Admin/AdminBuyerPdf',httpOptions).subscribe
    (data =>{
  
       this.response=data;
      
       console.log(this.Pdf);
       this.Pdf=this.response.data;
    
       this.toastr.success("PDF is downloaded Please View in Downloads");
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    );

  }


}

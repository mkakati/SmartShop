import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-salerhistory',
  templateUrl: './salerhistory.component.html',
  styleUrls: ['./salerhistory.component.css']
})
export class SalerhistoryComponent implements OnInit {

  constructor(private httpservice:HttpClient) { }
  response;
  sales;
  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token') 
      })
    };
    this.httpservice.get('http://localhost:54673/api/Seller/SellerSale',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.sales);
       this.sales=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 


  }

}

import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  response;
  myorders;
  constructor(private httpservice:HttpClient) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token') 
      })
    };
    this.httpservice.get('http://localhost:54673/api/Buyer/GetOrdersByUserId',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.myorders);
       this.myorders=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }

  View(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + localStorage.getItem('token') 
      })
    };
    this.httpservice.get('http://localhost:54673/api/Buyer/GetOrdersByUserId',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.myorders);
       this.myorders=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    );
  }
}

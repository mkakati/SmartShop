import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private httpservice:HttpClient) { }
  response;
  profile;
  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    this.httpservice.get('http://localhost:54673/api/Buyer/Profile',httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.profile);
       this.profile=this.response.data;
    },
    
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }

}

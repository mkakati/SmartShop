import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bankconfirmation',
  templateUrl: './bankconfirmation.component.html',
  styleUrls: ['./bankconfirmation.component.css']
})
export class BankconfirmationComponent implements OnInit {
  response;
  amount;
  AccountId="";
  constructor(private httpservice:HttpClient,private route:ActivatedRoute,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit() {

    const httpOptions={headers:new HttpHeaders
      ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
      
    
    this.route.queryParams.subscribe(params => {
      debugger;
      this.AccountId=params["AccountId"];
    });
    this.httpservice.post('http://localhost:54673/api/Seller/RegisterAccount/?AccountId='+this.AccountId,null,httpOptions).subscribe
    (data =>{

      this.response=data;
      console.log(this.response);
      this.amount=this.response.data;
      this.spinner.show();
      setTimeout(() => 
        {
          this.router.navigateByUrl("/sellerpayment")
        },
        2000);
    
   },
   (err: HttpErrorResponse) => {
     console.log (err.message);
   }
   ); 
 }

   


  }




  



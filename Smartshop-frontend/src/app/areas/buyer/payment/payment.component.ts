import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  url;
  OrderId="";
  TotalAmount="";
  constructor(private route:ActivatedRoute,private sanitizer:DomSanitizer) { 
    this.sanitizer = sanitizer;
    this.route.queryParams.subscribe(params => {
      debugger;
      this.OrderId=params["OrderId"];
      this.TotalAmount=params["TotalAmount"];
      });
  }

  ngOnInit() {
    this.url=this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4201/userorder/?OrderId="+this.OrderId+"&TotalAmount="+this.TotalAmount);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner'
import { BuyerserviceService } from '../buyerservice.service';
import {ToastrService} from "ngx-toastr"
import { CartService } from 'src/app/shared/cart.service';
@Component({
  selector: 'app-myordersdetails',
  templateUrl: './myordersdetails.component.html',
  styleUrls: ['./myordersdetails.component.css']
})
export class MyordersdetailsComponent implements OnInit {

  OrderId="";
  response;
  orderdetail;
  detail;
  Pdf;
  constructor(private router:Router,private toastr:ToastrService,private service:BuyerserviceService,private route: ActivatedRoute,private httpservice:HttpClient,private spinner:NgxSpinnerService,private cart:CartService) { 
    this.spinner.show();
    this.route.queryParams.subscribe(params => {
      debugger;
      this.OrderId=params["OrderID"];

      });
      this.httpservice.get('http://localhost:54673/api/Buyer/GetOrderDetails/?OrderId='+this.OrderId).subscribe
    (data =>{

       this.response=data;
       console.log(this.response);
       this.orderdetail=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
      this.spinner.hide();
  }

  ngOnInit() {
this.cart.getcartquantity().subscribe(data => { 
 let cartresponse:any=data;
   this.cart.carttotal=cartresponse.data;
  }); 

  }

  apires;
  cancel(OrdersMasterId, UnitPrice) {
    debugger;
    // this.service.refund(OrdersMasterId,UnitPrice).subscribe
    // (data=>{
    //   if(data=='Success'){
    debugger;
    this.service.cancelstatus(OrdersMasterId).subscribe(data => {
      this.service.refund(OrdersMasterId, UnitPrice).subscribe
        (data => {
          if (data == 'Success') {
            this.toastr.success('Refund will be credited in your account after 2-3 working days');
            this.router.navigateByUrl('/buyer/mycart', { skipLocationChange: true }).then(() =>
              this.router.navigateByUrl("/buyer/myorderdetails?OrderID=" + this.OrderId));
          }

          else {
            this.toastr.error('something went wrong');
          }
        });




    });
  }


  generatepdf(){
    window.print();
  }
}

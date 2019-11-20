import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdetailserviceService } from '../../productdetails/productdetailservice.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subId;
  utils;
  apires;
  cartresponse;
  response;
  searchitem;
  search;
  constructor(private cart:CartService,private httpservice:HttpClient,private route:ActivatedRoute,private router:Router,private fb:FormBuilder,private proService:ProductdetailserviceService,private toastr: ToastrService) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

       this.route.queryParams.subscribe(params => {
        this.searchitem = params['value'];


    this.httpservice.get('http://localhost:54673/api/Buyer/Search/?searchstring='+this.searchitem,httpOptions).subscribe
    (data =>{

       this.response=data;
       console.log(this.search);
       this.search=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 

  }

       )}



       onclickk(proid)
       {
         this.router.navigateByUrl(
           this.router.createUrlTree(
             ['productdetail'], {queryParams: {ProductId: proid}}
           )
         );
         }
         detailFormmm=this.fb.group({
       
           quantity:['1'],
           ProductId:[]
       
         })
         
       
       get quantity()
       {
       
         return this.detailFormmm.get('quantity');
       }
         
         onsubmit(productId)
       {
         debugger;
       this.proService.detailformmm(this.detailFormmm.value,productId)  
       .subscribe(data => { 
         this.response=data;
             console.log(this.utils);
            this.utils=this.response.data; 
            this.toastr.success("Added to Cart");
            this.cart.getcartquantity().subscribe(data => { 
             this.cartresponse=data;
             debugger;
              this.cart.carttotal=this.cartresponse.data;}); 
            
       },  
       error => {  
         alert(error);  
         this.toastr.error(this.apires.Message);
       });  
          
         }
       


}


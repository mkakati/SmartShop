import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AddDataService} from 'src/app/areas/account/service/add-data.service';
import *as jwt_decode from 'jwt-decode';
import { ProductdetailserviceService } from 'src/app/areas/productdetails/productdetailservice.service';
import { CartService } from 'src/app/shared/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {

  constructor(private toaster:ToastrService,private cart:CartService,private httpservice:HttpClient,private router:Router,private service:AddDataService,private cartService:ProductdetailserviceService) { }
  searchval;
  category;
  response;
  subcategory;
  decodeToken;
  isBuyer=false;
  isSeller=false;
  isLogin=false;
  isAdmin=false;
  total;
  cartresponse;
  id;
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
    debugger;
    // this.cartService.getCartItems()
    //         .subscribe(value => {
    //             this.total = value;
    //         });

    this.changeflag();
    this.httpservice.get('http://localhost:54673/api/Product/GetCategories').subscribe
    (data =>{

       this.response=data;
       console.log(this.category);
       this.category=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
    if(localStorage.getItem("tempuserid")){
    debugger;
      this.cart.cartquantitywithoutlogin().subscribe(data => { 
        this.cartresponse=data;
        debugger;
         this.cart.carttotal=this.cartresponse.data;}); 
    }
    else{
    this.cart.getcartquantity().subscribe(data => { 
      this.cartresponse=data;
      debugger;
       this.cart.carttotal=this.cartresponse.data;}); 
    }
  }
  //var isAuthorized = this.service.isAuthorized();
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
    if(this.decodeToken.role.includes("Admin")){
      this.isAdmin=true;
    }
  }
}
seller(){
  debugger;
  this.router.navigateByUrl('seller-dashboard');
}

logout()
{
  localStorage.removeItem("token");
  this.changeflag();
  this.toaster.success("Logout");
  this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
this.router.navigate(["homepage"])); 
 // this.ref.detectChanges();
  //this.router.navigateByUrl('homepage');
  //this.ref.markForCheck();
  //this.ref.detectChanges();
  
}

direct(CatId){
  debugger;
  // this.router.navigateByUrl('/account/login', {skipLocationChange: true}).then(()=>
//this.router.navigateByUrl("subcategory",{queryParams: {catId: CatId}}); 
this.router.navigateByUrl(
  this.router.createUrlTree(
    ['subcategory'], {queryParams: {catId: CatId}}
  )
);
}
search(event){
  
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     "Authorization": "Bearer " + localStorage.getItem('token') 
  //   })
  // };
  this.searchval=event.target.value;
  // this.httpservice.get('http://localhost:54673/api/Buyer/Search',httpOptions).subscribe
  //   (data =>{

  //      this.response=data;
  //      console.log(this.category);
  //      this.category=this.response.data;
  //   },
  //   (err: HttpErrorResponse) => {
  //     console.log (err.message);
  //   }
  //   ); 
 }
 onSearchClick(){
   this.router.navigateByUrl("/search?value="+this.searchval);
 }
}

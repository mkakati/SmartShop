import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import {Product, Add, Sub } from '../Product.model'; 
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { Order, orders } from '../incomingorder/incomingorder.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apires;
  ordersss:orders;
  Categorlist : Product[];  
  SubCategorylist: Product;  
  constructor(private http: HttpClient ,private router:Router) { }  
  baseUrl: string = 'http://localhost:54673/api/Seller/';  
  
 
  getProducts() {  

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer " + localStorage.getItem('token')
        
      })
    };
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    return this.http.get<Product[]>(this.baseUrl+'GetProducts',httpOptions);  
  }  
  
  createProduct(product: Product,fileToUpload) {  
    var productid;
    const httpOptions={headers:new HttpHeaders
      ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
     this.http.post(this.baseUrl+'AddProduct', product,httpOptions).subscribe
     ( (response=>{
       this.apires=response;
       console.log(this.apires);   

       if(this.apires.StatusCode==400){
         //this.message=this.apires.Message;
       }
       else if(this.apires.StatusCode==200){
        debugger;
        productid=this.apires.data;
        const formData: FormData = new FormData();
        formData.append('Image', fileToUpload, fileToUpload.name);
        formData.append('ProductId',productid);
        const httpOption={headers:new HttpHeaders
          ({'Content-Type':'application/json',"Authorization": "Bearer " + localStorage.getItem('token')})};
          httpOptions.headers.append('Content-Type','multipart/form-data');
        this.http.post(this.baseUrl + 'UploadImage', formData).subscribe();         
         //localStorage.setItem("token",this.apires.data.token);
         this.router.navigateByUrl('list-pro');
       }  
   })); 
  }  
  dialogData: any;
  get data(): Product[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  dataChange: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  updateIssue (product:Product) {
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.put
      (this.baseUrl+'UpdateProduct',product, httpOptions).subscribe();
  }

  deleteIssue(ProductId:string){
    //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
     return this.http.delete
      (this.baseUrl+'DeleteProduct',{params: {ProductId: ProductId}}).subscribe();
    }

    getIncomingorder() {  

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      return this.http.get<Order[]>(this.baseUrl+'IncomingOrders',httpOptions);  
    }  



    Orders(StatusFlag:orders){
      debugger;

      // const httpOptions={headers:new HttpHeaders
      //   ({'Content-Type':'application/json'})};
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
         // "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      return this.http.post<orders[]>(this.baseUrl+'Status',StatusFlag,httpOptions)
      
      }

      AddCategory(AddCategory:Add)
    {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
         // "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return this.http.post<Add[]>
        (this.baseUrl+'/AddCategory',AddCategory,httpOptions)
      
      
    }
    AddSubCategory(AddSubCategory:Sub){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
         // "Authorization": "Bearer " + localStorage.getItem('token')
          
        })
      };
      httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return this.http.post<Add[]>
        (this.baseUrl+'/AddSubCategory',AddSubCategory,httpOptions)
    }



}  


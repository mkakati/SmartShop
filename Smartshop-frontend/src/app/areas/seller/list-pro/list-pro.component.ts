import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";  

import{ProductService} from '../services/product.service';
import { Product } from '../Product.model';
import { MatDialog} from '@angular/material';
import { EditComponent } from '../edit/edit.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {
ProductId:number;

  products;
  apires:any;
  message=null;

  constructor(private proService: ProductService, private router: Router,private dialog:MatDialog) { }

  ngOnInit() {
    this.proService.getProducts()  
      .subscribe
      ( (response=>{
        this.apires=response;
        console.log(this.apires);   

        if(this.apires.StatusCode==400){
          this.message=this.apires.Message;
        }
        else if(this.apires.StatusCode==200){
         
          this.products=this.apires.data;
          //localStorage.setItem("token",this.apires.data.token);
          //this.router.navigateByUrl('homepage');
        }  
    })); 
  }
  // deletePro(product: Product): void {  
  //   this.proService.deleteProducts(product.ProductId)  
  //     .subscribe(data => {  
  //       this.products = this.products.filter(u => u !== product);  
  //     })  
  // }
  // editPro(product: Product): void {  
  //   localStorage.removeItem('editproId');  
  //   localStorage.setItem('editproId', product.ProductId.toString());  
  //   this.router.navigate(['add-pro']);  
  // }    



  startEdit(ProductId:number,ProductName:string,UnitPrice:string,Description:string,Stock:string) {
    this.ProductId = ProductId;
    const dialogRef = this.dialog.open(EditComponent, {
      data: {ProductId:ProductId,ProductName: ProductName,UnitPrice:UnitPrice,Description:Description,Stock:Stock}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.proService.dataChange.value.findIndex(x => x.ProductId === this.ProductId);
        this.proService.dataChange.value[foundIndex] = this.proService.getDialogData();
        this.ngOnInit();
      }
    });
  }

  deleteItem(ProductId:number,ProductName:string,UnitPrice:string,Description:string,Stock:string) {
    
    this.ProductId = ProductId;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {ProductId:ProductId,ProductName: ProductName,UnitPrice:UnitPrice,Description:Description,Stock:Stock}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.proService.dataChange.value.findIndex(x => x.ProductId === this.ProductId);
        this.proService.dataChange.value.splice(foundIndex, 1);
        this.ngOnInit();
        
      }
    });
  }
}


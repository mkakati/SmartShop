import { Component, OnInit } from '@angular/core';
import{ProductService} from '../services/product.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  
import { Router } from "@angular/router"; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginSellerService } from '../services/loginseller.service';
import * as jwt_decode from 'jwt-decode';
import { AddcategoriesComponent } from '../addcategories/addcategories.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { filter } from 'rxjs/operators';
import { AddsubcategoryComponent } from '../addsubcategory/addsubcategory.component';

//import { Product } from '../Product.model';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

 
  proformlabel: string = 'Add Products';  
  proformbtn: string = 'Save';  
  ProductId: number;
  files: any;

  constructor(private httpservice:HttpClient,private formBuilder: FormBuilder, private router: Router, private proService: ProductService,private dialog:MatDialog) { }
 
  AddcategoriesComponentRef: MatDialogRef<AddcategoriesComponent>;
  AddSubcategoriesComponentRef:MatDialogRef<AddsubcategoryComponent>;
  fileToUpload: File = null;
  addForm: FormGroup;  
  btnvisibility: boolean = true; 
  utils;
  utilss;
  response;
  decodeToken;

    
  ngOnInit() {
    this.httpservice.get('http://localhost:54673/api/Product/GetCategories').subscribe
    (data =>{
      this.response=data;
       console.log(this.utils);
       this.utils=this.response.data;
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  
  
    this.addForm = this.formBuilder.group({  
      CategoryId: ['', [Validators.required]],
      SubCategoryId: ['', [Validators.required]],
     ProductName: ['', Validators.required], 
 
      UnitPrice: ['', Validators.required],  
      Description: ['', Validators.required],
      Stock:['', Validators.required],
      ImageUrl:['', Validators.required]
    });  

  }

  handleFileInput(files: FileList) {this.fileToUpload = files.item(0); }


  onSelect(CatId)
    {
      this.httpservice.get('http://localhost:54673/api/Product/GetSubCategoriesById/'+CatId).subscribe
      (data =>{
        this.response=data;
         console.log(this.utilss);
         this.utilss=this.response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      ); 
    }
 
  onSubmit() {  
  
   this.proService.createProduct(this.addForm.value,this.fileToUpload);   

    }
    token()
    {
    this.decodeToken = jwt_decode(localStorage.getItem("token"));
     return this.decodeToken.isApproved;
    }

    openAddFileDialog() {
      this.AddcategoriesComponentRef = this.dialog.open(AddcategoriesComponent, {
      });
  
    }
    openAddSubDialog() {
      this.AddSubcategoriesComponentRef = this.dialog.open(AddsubcategoryComponent, {
      });
    
  }
}

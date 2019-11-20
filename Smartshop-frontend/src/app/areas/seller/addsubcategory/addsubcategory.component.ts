import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {

  constructor(private httpservice:HttpClient,private formBuilder: FormBuilder, private router: Router, private proService: ProductService,private dialog:MatDialog) { }
  response;
  utils;
  addsub;
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
  
  }

  ngForm = this.formBuilder.group({  
    CategoryId:[''],
    SubCategoryName: ['', [Validators.required]]
   
  }
  )
  get CategoryName(){
    return this.ngForm.get('CategoryName');
  }
  onNoClick()
  {
    this.dialog.closeAll();
  }
 

  AddSubCategories()
  {
   debugger;
    this.proService.AddSubCategory(this.ngForm.value).subscribe(

      data =>{
        this.response=data;
         console.log(this.addsub);
         this.addsub=this.response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      );   
      
  

}
}



import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {
  
  response;
  addproducts;
  constructor(private httpservice:HttpClient,private formBuilder: FormBuilder, private router: Router, private proService: ProductService,private dialog:MatDialog) { }

  ngOnInit() {
  
     
  
    }  

  
  ngForm = this.formBuilder.group({  
    
    CategoryName: ['', [Validators.required]],
   
  }
  )
  get CategoryName(){
    return this.ngForm.get('CategoryName');
  }
 


  AddCategories()
  {
   
    this.proService.AddCategory(this.ngForm.value).subscribe(

      data =>{
        this.response=data;
         console.log(this.addproducts);
         this.addproducts=this.response.data;
         
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      );   
      
  }
  onNoClick()
  {
    this.dialog.closeAll();
  }
}

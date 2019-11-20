import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  catId;
  constructor(private httpservice:HttpClient,private route: ActivatedRoute) { 
    //this.ref.detectChanges();
    this.route.queryParams.subscribe(params => {
      this.catId = params['catId'];
      this.httpservice.get('http://localhost:54673/api/Product/GetSubCategoriesById/'+this.catId).subscribe
      (data =>{
  
         this.response=data;
         console.log(this.response);
         this.subcategory=this.response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
      ); 
      });
     
  }


  response;
  subcategory;
  ngOnInit() {
    
  }



}

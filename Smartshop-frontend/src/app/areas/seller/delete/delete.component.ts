import { Component, OnInit ,Inject} from '@angular/core';
import {ProductService} from '../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

 
  constructor(public dialogRef:MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA)public data:any,
  public dataservice:ProductService) { }

  onNoClick():void{
    this.dialogRef.close();
  }

  confirmDelete():void{
    this.dataservice.deleteIssue(this.data.ProductId);
  }
  ngOnInit() {
  }
}

import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BuyerserviceService } from '../buyerservice.service';

@Component({
  selector: 'app-deletecartitem',
  templateUrl: './deletecartitem.component.html',
  styleUrls: ['./deletecartitem.component.css']
})
export class DeletecartitemComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DeletecartitemComponent>,@Inject(MAT_DIALOG_DATA)public data:any,
  public dataservice:BuyerserviceService) { }

  onNoClick():void{
    this.dialogRef.close();
  }

  confirmDelete():void{
    debugger;
    this.dataservice.deletecartitem(this.data.CartId);
  }
  ngOnInit() {
  }
}


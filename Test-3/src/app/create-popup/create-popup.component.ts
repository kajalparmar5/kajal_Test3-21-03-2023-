import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataType } from '../data-type';
import { Data } from '@syncfusion/ej2-angular-grids';
import { MyServicesService } from '../my-services.service';


@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.css']
})
export class CreatePopupComponent {
  dkata:DataType | undefined

  constructor(private service:MyServicesService) {}

  onSubmit(data:DataType) {
    console.log("hello")
    this.dkata=data
    console.log(this.dkata); 
    this.service.addData(this.dkata).subscribe(res=>console.log(res))
  
   //this.dialogRef.close();
  }

}

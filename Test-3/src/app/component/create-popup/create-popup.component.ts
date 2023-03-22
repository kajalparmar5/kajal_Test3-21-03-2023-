import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataType } from '../../interface/data-type';
import { Data } from '@syncfusion/ej2-angular-grids';
import { MyServicesService } from '../../service/my-services.service';


@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.css']
})
export class CreatePopupComponent {
  //dkata:DataType | undefined
  dialogRef: any;

  constructor(private service:MyServicesService) {}

  program: DataType = {
    programID: '1',
    programNumber: '',
    programName: '',
    programDescription: '',
    canDelete: false,
    isActive: false,
    programBudget: 0,
    isVirtual: false
  };

  onSubmit(data:DataType) {
   // console.log("hello")
   // this.dkata=data
  //  console.log(this.dkata); 
    this.service.addData(this.program).subscribe((res: any) => {
      this.program = res
      console.log(this.program)
    });

    // this.service.addData(this.dkata)
  //  .subscribe(res=>console.log(res))
  
   //this.dialogRef.close();
  }

}

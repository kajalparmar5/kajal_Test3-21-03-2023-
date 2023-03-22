import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataType } from '../../interface/data-type';
import { Data } from '@syncfusion/ej2-angular-grids';
import { MyServicesService } from '../../service/my-services.service';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.css'],
})
export class CreatePopupComponent {
  constructor(
    private service: MyServicesService,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private dialogRef: MatDialogRef<CreatePopupComponent>
  ) {}

  program: DataType = {
    programID: '',
    programNumber: '',
    programName: '',
    programDescription: '',
    canDelete: false,
    isActive: false,
    programBudget: 0,
    isVirtual: false,
  };

  onSubmit(data: DataType) {
    this.program = data;
    this.service.addData(this.program).subscribe((res: any) => {
      this.program = res;
      console.log(this.program);
    });
    this.dialogRef.close(true);
  }
}

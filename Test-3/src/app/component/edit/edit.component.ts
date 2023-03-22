import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataType } from '../../interface/data-type';
import { MyServicesService } from '../../service/my-services.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form: NgForm | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private service: MyServicesService,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private dialogRef: MatDialogRef<EditComponent>
  ) {
    this.selectedProgram = data;
  }

  selectedProgram: DataType;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
  onSubmit(data: DataType) {
    this.service.updateData(this.selectedProgram).subscribe((res) => {
      console.log(res);
    });
    this.dialogRef.close(true);
  }
}

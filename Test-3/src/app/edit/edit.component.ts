import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataType } from '../data-type';
import { MyServicesService } from '../my-services.service';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterViewInit{
  @ViewChild('form')form:NgForm | undefined
  constructor(private service:MyServicesService,@Inject(MAT_DIALOG_DATA) public data: DataType,){
    this.selectedProgram = data;
  }

  selectedProgram !:DataType
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    
  }
  onSubmit(data:DataType){
      this.service.updateData(this.selectedProgram).subscribe(res=>console.log(res)
      )
  }
}

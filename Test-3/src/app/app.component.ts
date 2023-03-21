import { Component, OnInit } from '@angular/core';
import { MyServicesService } from './my-services.service';
import { MatDialog } from '@angular/material/dialog';

import { CreatePopupComponent } from './create-popup/create-popup.component';
import { EditComponent } from './edit/edit.component';
import { DataType } from './data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test-3';
  programData: any = [];
  value:any=[]
  buttonText:any
  selectedProgram :DataType | undefined


  constructor(private service :MyServicesService , private dialog:MatDialog){}

  onCreate(){
    this.dialog.open(CreatePopupComponent)
  }

  ngOnInit() {
    this.service.getData().subscribe((Response)=>{
      this.programData=Response
      console.log(Response)
    })
  }
  onEdit(data:any){
    this.dialog.open(EditComponent,{data:data})
  }
}

import { Component, OnInit } from '@angular/core';
import { MyServicesService } from './service/my-services.service';
import { MatDialog } from '@angular/material/dialog';

import { CreatePopupComponent } from './component/create-popup/create-popup.component';
import { EditComponent } from './component/edit/edit.component';
import { DataType } from './interface/data-type';

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
    this.dialog.open(CreatePopupComponent,{
      width: '900px',
      restoreFocus: true,
    })
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
  changeStatus(programID: string, data: DataType, isActive: boolean) {
    this.service.changeStatus(programID, data, isActive).subscribe()
  }
  // onDeActive(data:DataType){
  //   this.service.isDeactiveData(data.programID).subscribe(res=>console.log(res))

  // }

}

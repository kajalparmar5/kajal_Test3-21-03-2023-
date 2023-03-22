import { Component, OnInit } from '@angular/core';
import { MyServicesService } from './service/my-services.service';
import { MatDialog } from '@angular/material/dialog';

import { CreatePopupComponent } from './component/create-popup/create-popup.component';
import { EditComponent } from './component/edit/edit.component';
import { DataType } from './interface/data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Test-3';
  programData: DataType[] = [];
  value: any = [];
  buttonText: any;
  selectedProgram: DataType | undefined;

  constructor(private service: MyServicesService, private dialog: MatDialog) {}

  onCreate() {
    this.dialog.open(CreatePopupComponent, {
      width: '900px',
      restoreFocus: true,
    });
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.service.getData().subscribe((res) => {
      this.programData = res;
      console.log(res);
      console.log(this.programData);
    });
    this.service.newProgram.subscribe((res) => {
      this.programData = res;
    });
  }
  onEdit(data: any) {
    this.dialog.open(EditComponent, { data: data });
  }
  changeStatus(data: DataType) {
    if (data.isActive) {
      console.log('true');
      this.service.isActiveData(data.programID).subscribe(res=>{console.log(res);
      })
      
      data.isActive = !data.isActive;
    } else {
      console.log('false');
      this.service.isDeactiveData(data.programID).subscribe(res=>{console.log(res);
      })
      data.isActive = !data.isActive;
    }
  }
}

// manage-employee.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent {
  empData:any

  constructor(private empService:EmployeeService,private dialog: MatDialog,private router:Router) {
    this.empService.getAllemployee().subscribe((data)=>{
      this.empData=data
      console.log(this.empData)
    })
  }

  openAddEmpDialog(){
    this.dialog.open(AddEmployeeComponent)
  }
  openUpdateEmpDialog(){
    this.dialog.open(UpdateEmployeeComponent)
  }
  openDeleteEmpDialog(){
    this.dialog.open(DeleteEmployeeComponent)
  }

  
}

import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  employeeId: any;
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    private empService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.empService.deleteEmployee(this.employeeId).subscribe({
      next:(response)=>{
        alert("Employee deleted successfully")
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
    })
  }
}

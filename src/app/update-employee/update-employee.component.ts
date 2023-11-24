import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  editEmpForm = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
  })

  
  get employeeIdValidator(){
    return this.editEmpForm.get('employeeId')
  }
  get firstNameValidator(){
    return this.editEmpForm.get('firstName')
  }
  get lastNameValidator(){
    return this.editEmpForm.get('lastName')
  }
  get emailValidator(){
    return this.editEmpForm.get('email')
  }
  get mobileNoValidator(){
    return this.editEmpForm.get('mobileNo')
  }
  get userIdValidator(){
    return this.editEmpForm.get('userId')
  }
  get salaryValidator(){
    return this.editEmpForm.get('salary')
  }
  get isActiveValidator(){
    return this.editEmpForm.get('isActive')
  }

  empData:any
  employee:any=[{}]
  
  constructor(private auth:EmployeeService, private router: Router) { 
    this.auth.getAllemployee().subscribe((data)=>{
      this.empData=data
    })
  }
  getSelectedEmp(event:any){
    this.auth.getEmployeeById(event.target.value).subscribe((data)=>{
      this.employee=data
    })
  }
  editEmp(formData: any) {
    formData.isActive = formData.isActive === 'true';
    this.auth.updateEmployee(formData).subscribe({
      next:(response)=>{
        alert("Employee updated successfully")
      }
    })
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  signupEmpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    userId: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required)
  })

  get firstNameValidator() {
    return this.signupEmpForm.get('firstName')
  }
  get lastNameValidator() {
    return this.signupEmpForm.get('lastName')
  }
  get emailValidator() {
    return this.signupEmpForm.get('email')
  }
  get mobileNoValidator() {
    return this.signupEmpForm.get('mobileNo')
  }
  get userIdValidator() {
    return this.signupEmpForm.get('userId')
  }
  get salaryValidator() {
    return this.signupEmpForm.get('salary')
  }
  get isActiveValidator() {
    return this.signupEmpForm.get('isActive')
  }
  constructor(private auth: EmployeeService, private router: Router) { }

  createEmp(formData: any) {
    console.log(formData)
    formData.isActive = formData.isActive === 'true';
    this.auth.addNewEmployee(formData).subscribe({
      next:(response)=>{
        alert("Employee added successfully")
      }
    })
  }
}

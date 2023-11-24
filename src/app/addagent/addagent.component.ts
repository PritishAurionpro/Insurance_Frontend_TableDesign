import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AgentService } from '../services/agent-services.service';



@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent {
  signupAgentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    userId: new FormControl('', Validators.required),
    commissionEarned: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required)
  })

  get firstNameValidator() {
    return this.signupAgentForm.get('firstName')
  }
  get lastNameValidator() {
    return this.signupAgentForm.get('lastName')
  }
  get qualificationValidator() {
    return this.signupAgentForm.get('qualification')
  }
  get emailValidator() {
    return this.signupAgentForm.get('email')
  }
  get mobileNoValidator() {
    return this.signupAgentForm.get('mobileNo')
  }
  get userIdValidator() {
    return this.signupAgentForm.get('userId')
  }
  get commissionEarnedValidator() {
    return this.signupAgentForm.get('commissionEarned')
  }
  get isActiveValidator() {
    return this.signupAgentForm.get('isActive')
  }
  constructor(private auth: AgentService, private router: Router) { }

  createAgent(formData: any) {
    console.log(formData)
    formData.isActive = formData.isActive === 'true';
    this.auth.addAgent(formData).subscribe({
      next:(response)=>{
        alert("Agent added successfully")
      },
      error:(err:HttpErrorResponse)=>{
        alert("Please put proper values")
        console.log(err)
      }
    })
  }
}
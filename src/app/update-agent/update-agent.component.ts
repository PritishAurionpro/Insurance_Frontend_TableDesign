import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent-services.service';


@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})

export class UpdateAgentComponent {
  editAgentForm = new FormGroup({
    agentId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    commissionEarned: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
  })

  get agentIdValidator(){
    return this.editAgentForm.get('agentId')
  }
  get firstNameValidator(){
    return this.editAgentForm.get('firstName')
  }
  get lastNameValidator(){
    return this.editAgentForm.get('lastName')
  }
  get qualificationValidator(){
    return this.editAgentForm.get('qualification')
  }
  get emailValidator(){
    return this.editAgentForm.get('email')
  }
  get mobileNoValidator(){
    return this.editAgentForm.get('mobileNo')
  }
  get userIdValidator(){
    return this.editAgentForm.get('userId')
  }
  get commissionEarnedValidator(){
    return this.editAgentForm.get('commissionEarned')
  }
  get isActiveValidator(){
    return this.editAgentForm.get('isActive')
  }

  agentData:any
  agent: any = [{}]

  constructor(private auth:AgentService, private router: Router) { 
    this.auth.getAllAgent().subscribe((data)=>{
      this.agentData=data
      console.log(this.agentData)
    })
  }
  getSelectedAgent(event:any){
   this.auth.getAllAgentBuId(event.target.value).subscribe((data)=>{
    this.agent=data
   })
  }

  editAgent(formData: any) {
    formData.isActive = formData.isActive === 'true';
    this.auth.updateAgent(formData).subscribe({
      next:(response)=>{
        alert("Agent updated successfully")
      }
    })
  }
}

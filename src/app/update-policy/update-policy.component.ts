import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {
  updateInsurancePolicy= new FormGroup({
    policyNo:new FormControl(''),
    issueDate:new FormControl(''),
    maturityDate:new FormControl(''),
    premiumType:new FormControl(''),
    premiumAmount:new FormControl(''),
    sumAssured:new FormControl(''),
    status:new FormControl(''),
    isActive:new FormControl(''),
    planId:new FormControl('')
 
  })

  insurancePolicyData:any
   policy:any=[{}]
  constructor(private insuranceService:PolicyService,private router:Router){
    insuranceService.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
    })
  }

  getSelectedPolicy(event:any){
    this.insuranceService.getInsurancePolicyById(event.target.value).subscribe((data)=>{
      this.policy=data
      
    })
  }

  updateInsurancePolicyData(data: any) {
    data.isActive = data.isActive === 'true';
    this.insuranceService.updateInsurancePolicy(data).subscribe({
      next: (result) => {
        alert("Insurance policy updated Successfully");
        console.log(result);
        this.updateInsurancePolicy.reset();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        alert("Please put proper Data");
      }
    });
  }
}

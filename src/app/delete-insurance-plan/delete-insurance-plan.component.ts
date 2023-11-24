import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsurancePlanComponent } from '../insurance-plan/insurance-plan.component';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-insurance-plan',
  templateUrl: './delete-insurance-plan.component.html',
  styleUrls: ['./delete-insurance-plan.component.css']
})
export class DeleteInsurancePlanComponent {
  deleteInsurancePlan= new FormGroup({
    planId:new FormControl(''),
    planName:new FormControl(''),
    schemeId:new FormControl(''),
    isActive:new FormControl('')
  })
   insurancePlanData:any
   plan:any=[{}]
  constructor(private insuranceService:InsurancePlanService,private router:Router){
    insuranceService.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
    })
  }
  getSelectedPlan(event:any){
    this.insuranceService.getInsurancePlanById(event.target.value).subscribe((data)=>{
      this.plan=data
      console.log("schemeId",this.plan)
    })
  }

  deleteInsurancePlanData(data:any){
    this.insuranceService.deleteInsurancePlan(data.planId).subscribe({
      next:(result)=>{
        alert("Insurance data deleted Successfully")
        console.log(result)
        this.deleteInsurancePlan.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-insurance-plan',
  templateUrl: './update-insurance-plan.component.html',
  styleUrls: ['./update-insurance-plan.component.css']
})
export class UpdateInsurancePlanComponent {
  updateInsurancePlan= new FormGroup({
    planId:new FormControl(''),
    planName:new FormControl('',Validators.required),
    schemeId:new FormControl(''),
    isActive:new FormControl('',Validators.required)
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

  updateInsurancePlanData(data: any) {
    data.isActive = data.isActive === 'true';
    this.insuranceService.updateInsurancePlan(data).subscribe({
      next: (result) => {
        alert("Insurance plan updated Successfully");
        console.log(result);
        this.updateInsurancePlan.reset();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      },
    });
  }

}

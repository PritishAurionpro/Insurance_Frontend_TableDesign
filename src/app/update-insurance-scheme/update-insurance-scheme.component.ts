import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';

@Component({
  selector: 'app-update-insurance-scheme',
  templateUrl: './update-insurance-scheme.component.html',
  styleUrls: ['./update-insurance-scheme.component.css']
})
export class UpdateInsuranceSchemeComponent {
  updateInsuranceScheme=new FormGroup({
    schemeId:new FormControl(''),
    schemeName:new FormControl(''),
    detailId:new FormControl(''),
    isActive:new FormControl('')
  })
  insuranceSchemeData:any
  scheme:any=[{}]
  constructor(private insuranceService : InsuranceSchemeService, private router:Router){
    insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.insuranceSchemeData=data
      console.log("schemedata:",this.insuranceSchemeData)
    })
  }

  getSelectedScheme(event : any){
    this.insuranceService.getInsuranceSchemeById(event.target.value).subscribe((data)=>{
      this.scheme=data
      console.log("schemeId",this.scheme)
    })
  }

  updateInsuranceSchemeData(data:any){
    this.insuranceService.updateInsuranceScheme(data).subscribe({
      next:(result)=>{
        alert("Insurance Scheme updated Successfully")
        console.log(result)
        this.updateInsuranceScheme.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}

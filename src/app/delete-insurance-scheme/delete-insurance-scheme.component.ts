import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-insurance-scheme',
  templateUrl: './delete-insurance-scheme.component.html',
  styleUrls: ['./delete-insurance-scheme.component.css']
})
export class DeleteInsuranceSchemeComponent {
  deleteInsuranceScheme=new FormGroup({
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
    })
  }

  getSelectedValue(event : any){
    this.insuranceService.getInsuranceSchemeById(event.target.value).subscribe((data)=>{
      this.scheme=data
    })
  }
  deleteInsuranceSchemeData(data:any){
    this.insuranceService.deleteInsuranceScheme(data.schemeId).subscribe({
      next:(result)=>{
        alert("Scheme data deleted Successfully")
        console.log(result)
        this.deleteInsuranceScheme.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent {
  addInsurancePolicy = new FormGroup({
    issueDate:new FormControl(''),
    maturityDate:new FormControl(''),
    premiumType:new FormControl(''),
    premiumAmount:new FormControl(''),
    sumAssured:new FormControl(''),
    status:new FormControl(''),
    isActive:new FormControl(''),
    planId:new FormControl('')
  })
  constructor(private insuranceService:PolicyService,private router:Router){}
  addNewInsurancePolicy(data:any){
    data.isActive = data.isActive === 'true';
    console.log("DAta : ",data)
    this.insuranceService.addNewInsurancePolicy(data).subscribe({
      next:(result)=>{
        alert("New Insurance Policy Added Successfully!")
        console.log("REsult",result)
        this.addInsurancePolicy.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
        alert("Please enter proper Data")
      }
    })
  }
}

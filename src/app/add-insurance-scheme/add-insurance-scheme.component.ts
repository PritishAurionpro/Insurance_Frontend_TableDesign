import { Component } from '@angular/core';
import {FormGroup,FormControl} from'@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent {
  insuranceSchemeData:any
  addInsuranceScheme=new FormGroup({
    schemeName:new FormControl(''),
    detailId:new FormControl(''),
    isActive:new FormControl('')
  })
  
  constructor(private insuranceService : InsuranceSchemeService, private router:Router){}

  addNewInsuranceScheme(data:any){
    console.log("DAta : ",data)
    this.insuranceService.addNewInsuranceScheme(data).subscribe({
      
      next:(result)=>{
        alert("New Insurance Scheme Added Successfully!")
        console.log("REsult",result)
        this.addInsuranceScheme.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}
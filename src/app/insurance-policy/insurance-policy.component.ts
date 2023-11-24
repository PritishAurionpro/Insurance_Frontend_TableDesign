import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PolicyService } from '../services/policy.service';
import { AddpolicyComponent } from '../addpolicy/addpolicy.component';
import { UpdatePolicyComponent } from '../update-policy/update-policy.component';
import { DeletePolicyComponent } from '../delete-policy/delete-policy.component';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent {
  insurancePolicyData:any
  constructor(private insurancePolicy:PolicyService,private dialog:MatDialog){
    this.insurancePolicy.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
      console.log(this.insurancePolicyData)
    })
  }

  getAllInsurancePolicy(){
    this.insurancePolicy.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
      next:(res:any)=>{  
             
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    }) 
  }
  openAddInsurancePolicyDialog(){
    const dialogRef=this.dialog.open(AddpolicyComponent);
    console.log("DaailogRef:",dialogRef)
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);

    // }); 
  }

  // openAddInsurancePlanDialog() {
  //   try {
  //     const dialogRef = this.dialog.open(AddInsurancePlanComponent);
  //     console.log("DialogRef:", dialogRef);
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(`Dialog result: ${result}`);
  //     });
  //   } catch (error) {
  //     console.error("Error opening dialog:", error);
  //   }
  // }

  openUpdateInsurancePolicyDialog(){
    this.dialog.open(UpdatePolicyComponent)
  }
  openDeleteInsurancePolicyDialog(){
    this.dialog.open(DeletePolicyComponent)
  }
}

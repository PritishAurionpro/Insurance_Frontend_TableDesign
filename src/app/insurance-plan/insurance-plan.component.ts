import { Component } from '@angular/core';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddInsurancePlanComponent } from '../add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from '../update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from '../delete-insurance-plan/delete-insurance-plan.component';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent {
  insurancePlanData:any
  constructor(private insurancePlan:InsurancePlanService,private router:Router,private dialog:MatDialog){
    this.insurancePlan.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
      console.log(this.insurancePlanData)
    })
  }

  getAllInsurancePlan(){
    this.insurancePlan.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
      next:(res:any)=>{
        
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    })

    
  }
  openAddInsurancePlanDialog(){
    const dialogRef=this.dialog.open(AddInsurancePlanComponent);
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
  openUpdateInsurancePlanDialog(){
    this.dialog.open(UpdateInsurancePlanComponent)
  }
  openDeleteInsurancePlanDialog(){
    this.dialog.open(DeleteInsurancePlanComponent)
  }
}

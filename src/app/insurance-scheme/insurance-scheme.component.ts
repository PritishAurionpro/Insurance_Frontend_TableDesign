import { Component } from '@angular/core';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddInsuranceSchemeComponent } from '../add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from '../update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from '../delete-insurance-scheme/delete-insurance-scheme.component';
@Component({
  selector: 'app-insurance-scheme',
  templateUrl: './insurance-scheme.component.html',
  styleUrls: ['./insurance-scheme.component.css']
})
export class InsuranceSchemeComponent {
  title='Welcome to Insurance scheme detail'
  insuranceData:any;
  constructor(private insuranceService : InsuranceSchemeService, private router:Router,private dialog:MatDialog){
    insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.insuranceData=data
      console.log("InsuranceData:",this.insuranceData)
    })
  }

  getAllInsuranceScheme(){
    this.insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.insuranceData=data
      next:(res:any)=>{
        
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    })
  }
  openAddInsuranceSchemeDialog(){
    const dialogRef=this.dialog.open(AddInsuranceSchemeComponent);
    console.log("DaailogRef:",dialogRef)
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);

    // });
  }

  openUpdateInsuranceSchemeDialog(){
    this.dialog.open(UpdateInsuranceSchemeComponent)
  }

  openDeleteInsuranceSchemeDialog(){
    this.dialog.open(DeleteInsuranceSchemeComponent)
  }

}

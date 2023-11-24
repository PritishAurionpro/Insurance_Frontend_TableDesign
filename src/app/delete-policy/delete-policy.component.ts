import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolicyService } from '../services/policy.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent {
  policyId: any;
  constructor(
    public dialogRef: MatDialogRef<DeletePolicyComponent>,
    private policyService: PolicyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.policyService.deleteInsurancePolicy(this.policyId).subscribe({
      next:(response)=>{
        alert("Policy deleted successfully")
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
    })
  }
}

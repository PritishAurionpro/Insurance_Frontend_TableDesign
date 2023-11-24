import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-inusrance-policy',
  templateUrl: './manage-inusrance-policy.component.html',
  styleUrls: ['./manage-inusrance-policy.component.css']
})
export class ManageInusrancePolicyComponent {

  constructor(private router: Router){}
  // Add Insurance Scheme
  addInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-policy/add']);
  }

  // Update Insurance Scheme
  updateInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-policy/update']);
  }

  // Delete Insurance Scheme
  deleteInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-policy/delete']);
  }

  // View All Insurance Schemes
  viewAllInsuranceSchemes(): void {
    this.router.navigate(['/admin/manage-insurance-policy/view-all']);
  }
}

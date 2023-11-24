import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-insurance-plan',
  templateUrl: './manage-insurance-plan.component.html',
  styleUrls: ['./manage-insurance-plan.component.css']
})
export class ManageInsurancePlanComponent {

  constructor(private router: Router) {}

  // Add Insurance Plan
  addInsurancePlan(): void {
    this.router.navigate(['/admin/manage-insurance-plan/add']);
  }

  // Update Insurance Plan
  updateInsurancePlan(): void {
    this.router.navigate(['/admin/manage-insurance-plan/update']);
  }

  // Delete Insurance Plan
  deleteInsurancePlan(): void {
    this.router.navigate(['/admin/manage-insurance-plan/delete']);
  }

  // View All Insurance Plans
  viewAllInsurancePlans(): void {
    this.router.navigate(['/admin/manage-insurance-plan/view-all']);
  }
}

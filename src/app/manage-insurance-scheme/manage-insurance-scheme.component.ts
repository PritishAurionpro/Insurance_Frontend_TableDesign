import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-insurance-scheme',
  templateUrl: './manage-insurance-scheme.component.html',
  styleUrls: ['./manage-insurance-scheme.component.css']
})
export class ManageInsuranceSchemeComponent {

  constructor(private router: Router) {}

  // Add Insurance Scheme
  addInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-scheme/add']);
  }

  // Update Insurance Scheme
  updateInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-scheme/update']);
  }

  // Delete Insurance Scheme
  deleteInsuranceScheme(): void {
    this.router.navigate(['/admin/manage-insurance-scheme/delete']);
  }

  // View All Insurance Schemes
  viewAllInsuranceSchemes(): void {
    this.router.navigate(['/admin/manage-insurance-scheme/view-all']);
  }
}

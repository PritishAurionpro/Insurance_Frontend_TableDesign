import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent {

  constructor(private router: Router) {}

  // Add Customer
  addCustomer(): void {
    // Implement logic to navigate to the page for adding a customer
    this.router.navigate(['/employee/manage-customer/add']); // Adjust the route as needed
  }

  // Update Customer
  updateCustomer(): void {
    // Implement logic to navigate to the page for updating a customer
    this.router.navigate(['/employee/manage-customer/update']); // Adjust the route as needed
  }

  // Delete Customer
  deleteCustomer(): void {
    // Implement logic to delete a customer
    console.log('Delete Customer clicked');
    // You might want to show a confirmation dialog or directly send a request to delete the customer
  }

  // View All Customers
  viewAllCustomers(): void {
    // Implement logic to navigate to the page for viewing all customers
    this.router.navigate(['/employee/manage-customer/view-all']); // Adjust the route as needed
  }
}

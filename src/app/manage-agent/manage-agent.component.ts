import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-agent',
  templateUrl: './manage-agent.component.html',
  styleUrls: ['./manage-agent.component.css']
})
export class ManageAgentComponent {

  constructor(private router: Router) {}

  addAgent(): void {
    this.router.navigate(['/admin/manage-agent/add']); // Adjust the route as needed
  }


  updateAgent(): void {
    this.router.navigate(['/admin/manage-agent/update']); // Adjust the route as needed
  }


  deleteAgent(): void {
   
    console.log('Delete Agent clicked');
    
  }


  viewAllAgents(): void {
  
    this.router.navigate(['/admin/manage-agent/view-all']); // Adjust the route as needed
  }
}


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-manage-agent',
//   templateUrl: './manage-agent.component.html',
//   styleUrls: ['./manage-agent.component.css']
// })
// export class ManageAgentComponent {

//   constructor(private router: Router) {}

//   addAgent(): void {
//     this.router.navigate(['/admin/manage-agent/add']); // Adjust the route as needed
//   }


//   updateAgent(): void {
//     this.router.navigate(['/admin/manage-agent/update']); // Adjust the route as needed
//   }


//   deleteAgent(): void {
   
//     console.log('Delete Agent clicked');
    
//   }


//   viewAllAgents(): void {
  
//     this.router.navigate(['/admin/manage-agent/view-all']); // Adjust the route as needed
//   }
// }




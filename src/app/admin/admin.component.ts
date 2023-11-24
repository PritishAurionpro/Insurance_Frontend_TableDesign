import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName: any;

  constructor(private data: DataService, private router: Router) {
    this.adminName = data.userName;
  }
  navigateTo(route: string): void {
    this.router.navigate([`/admin/${route}`]);
  }

  
  /*
  navigateTo(option: string) {
    switch (option) {
      case 'manage-agent':
        this.router.navigate(['/admin/manage-agent']);
        break;
      case 'manage-employee':
        this.router.navigate(['/admin/manage-employee']);
        break;
      case 'manage-insurance-plan':
        this.router.navigate(['/admin/manage-insurance-plan']);
        break;
      case 'manage-insurance-scheme':
        this.router.navigate(['/admin/manage-insurance-scheme']);
        break;
      // Add more cases as needed for other options

      default:
        // Handle default case or do nothing
        break;
        
    }
    
  }
  */
}



/*
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminName:any
  constructor(private data:DataService){
    this.adminName= data.userName
  }
}
*/
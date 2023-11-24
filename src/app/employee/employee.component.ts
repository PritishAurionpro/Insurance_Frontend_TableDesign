import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AgentComponent } from '../agent/agent.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeName: any;

  constructor(private data: DataService, private router: Router) {
    this.employeeName = data.userName;
  }
  navigateTo(route: string): void {
    this.router.navigate([`/employee/${route}`]);
  }
}

  

/*
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeName:any
  constructor(private data:DataService){
    this.employeeName= data.userName
  }

}
*/
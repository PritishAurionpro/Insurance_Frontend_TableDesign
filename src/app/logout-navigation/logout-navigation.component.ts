import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-logout-navigation',
  templateUrl: './logout-navigation.component.html',
  styleUrls: ['./logout-navigation.component.css']
})
export class LogoutNavigationComponent {
  constructor(public loginService: LoginService,private router:Router){}
  logout() {
    // Call your logout function from the service
    this.loginService.logoutUser();
    
    this.router.navigate(['/home'])
    // Additional code or redirection after logout can be added here
  }
}

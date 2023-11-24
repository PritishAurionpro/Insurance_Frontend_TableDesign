import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
  //  userId: new FormControl('', Validators.required),
    userName: new FormControl(''),
    password: new FormControl('', Validators.required),
 //   roleId: new FormControl('')
  })
  //  get userIdValidator(){
  //    return this.loginForm.get('userId')
  //  }
  get userNameValidator(){
    return this.loginForm.get('userName')
  }
  get passwordValidator(){
    return this.loginForm.get('password')
  }
  //  get roleIdValidator(){
  //    return this.loginForm.get('roleId')
  //  }
  myToken : any = "";
  role:any
  user:any

  constructor ( private auth : LoginService, private router : Router,
    private data:DataService){}
  loginUser(formData:any){
    //const formData = this.loginForm.value;
    console.log("Form Data:", formData);
    this.auth.login(formData).subscribe({
      next:(response)=> {
        console.log(response);
        //get token value from header
        this.myToken = response.headers.get('jwt')
        //convert from json
        this.myToken = JSON.parse(this.myToken)
        console.log("Token generate : ",this.myToken)

        this.role=response.body
        console.log(this.role)
        //store in LS
        localStorage.setItem("token", this.myToken)

        //access object from response body
        this.user=response.body;

        //store user info in data service vars
     //   this.data.userId=this.user.userId
        this.data.userName=this.user.userName

        //admin or emp??
        if(this.user.roleName=="Admin")
          this.router.navigateByUrl("/admin");
        if(this.user.roleName=="Employee")
          this.router.navigateByUrl("/employee");
        if(this.user.roleName=="Customer")
          this.router.navigateByUrl("/customer");
        // else
        //   this.router.navigateByUrl("/agent");
      },
      error:(errorResponse : HttpErrorResponse)=>{
        console.log("ErrorResponse : ",errorResponse)
      }
    })
  }
  logout(){
    localStorage.removeItem("token");
  }
}

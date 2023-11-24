import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAllemployee(){
    return this.http.get(`https://localhost:7029/api/Employee`)
  }
  getEmployeeById(empId:any){
    return this.http.get(`https://localhost:7029/api/Employee/getEmpById${empId}`)
  }
  addNewEmployee(empData:any){
    return this.http.post(`https://localhost:7029/api/Employee/addEmployee`,empData)
  }
  updateEmployee(empData:any){
    return this.http.put(`https://localhost:7029/api/Employee/updateEmployee`,empData)
  }
  deleteEmployee(empId:any){
    return this.http.delete(`https://localhost:7029/api/Employee/deleteEmp${empId}`)
  }
}

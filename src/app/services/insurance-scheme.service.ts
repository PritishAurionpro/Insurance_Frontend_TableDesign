import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InsuranceSchemeService {
  // url = "https://localhost:7029/api/InsuranceScheme/getIScheme"
  constructor(private http:HttpClient) { }

  getAllInsuranceScheme(){
    return this.http.get(`https://localhost:7029/api/InsuranceScheme/getIScheme`);
  }

  getInsuranceSchemeById(schemeId:any){
    return this.http.get(`https://localhost:7029/api/InsuranceScheme/getISchemeById${schemeId}`);
  }
  addNewInsuranceScheme(data:any){
    console.log("serviceData:",data)
    return this.http.post(`https://localhost:7029/api/InsuranceScheme/addIScheme`,data);
  }

  
  updateInsuranceScheme(schemeData:any){
    return this.http.put(`https://localhost:7029/api/InsuranceScheme/updateIScheme`,schemeData);
  }
   deleteInsuranceScheme(schemeDId:any){
    return this.http.delete(`https://localhost:7029/api/InsuranceScheme/deleteIScheme${schemeDId}`)
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http:HttpClient) { }
  getAllInsurancePolicy() {
    return this.http.get(`https://localhost:7029/api/InsurancePolicy`);
  }

  getInsurancePolicyById(id: any) {
    return this.http.get(`https://localhost:7029/api/InsurancePolicy/getPolicyById${id}`);
  }

  addNewInsurancePolicy(policyNewdata: any) {
    return this.http.post(`https://localhost:7029/api/InsurancePolicy/addPolicy`, policyNewdata);
  }

  updateInsurancePolicy(policyData: any) {
    return this.http.put(`https://localhost:7029/api/InsurancePolicy/updatePolicy`, policyData);
  }
  deleteInsurancePolicy(policyId: any) {
    return this.http.delete(`https://localhost:7029/api/InsurancePolicy/deletePolicy${policyId}`);
  }
}

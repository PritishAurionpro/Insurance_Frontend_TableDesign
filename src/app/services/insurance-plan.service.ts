import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InsurancePlanService {

  constructor(private http: HttpClient) { }
  getAllInsurancePlan() {
    return this.http.get(`https://localhost:7029/api/InsurancePlan/getInsurance`);
  }

  getInsurancePlanById(id: any) {
    return this.http.get(`https://localhost:7029/api/InsurancePlan/getInsuranceById${id}`);
  }

  addNewInsurancePlan(planNewdata: any) {
    return this.http.post(`https://localhost:7029/api/InsurancePlan/addInsurance`, planNewdata);
  }

  updateInsurancePlan(planData: any) {
    return this.http.put(`https://localhost:7029/api/InsurancePlan/updateInsurance`, planData);
  }
  deleteInsurancePlan(planId: any) {
    return this.http.delete(`https://localhost:7029/api/InsurancePlan/deleteInsurance${planId}`);
  }

}

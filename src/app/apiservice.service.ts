import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7029/api/Role';
  // readonly photoUrl = "http://localhost:50306/Photos/";

  constructor(private http: HttpClient) { }

  getRoleList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addRole(role: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl, role, httpOptions);
  }

  updateRole(role: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl, role, httpOptions);
  }

  deleteRole(roleId: number): Observable<number> {
    console.log(roleId)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + '/' + roleId, httpOptions);
  }
 
}

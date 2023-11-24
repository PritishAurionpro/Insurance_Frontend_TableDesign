import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAllAgent() {
    return this.http.get(`https://localhost:7029/api/Agent`);
  }

  getAllAgentBuId(agentId: any) {
    return this.http.get(`https://localhost:7029/api/Agent/${agentId}`);
  }

  addAgent(agentData: any) {
    return this.http.post(`https://localhost:7029/api/Agent/addAgent`, agentData);
  }

  updateAgent(agentData: any) {
    return this.http.put(`https://localhost:7029/api/Agent/updateAgent`, agentData);
  }

  deleteAgent(agentId: any) {
    return this.http.delete(`https://localhost:7029/api/Agent/deleteAgent${agentId}`);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddagentComponent } from '../addagent/addagent.component';
import { UpdateAgentComponent } from '../update-agent/update-agent.component';
import { DeleteAgentComponent } from '../delete-agent/delete-agent.component';
import { AgentService } from '../services/agent-services.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  agentData: any

  constructor(private agentService: AgentService, private router: Router, private dialog: MatDialog) {
    //debugger
    this.agentService.getAllAgent().subscribe((data) => {
      this.agentData = data;
      console.log("Data",data);
    });
  }
  
  openAddAgentDialog() {
    this.dialog.open(AddagentComponent);
  }

  openUpdateAgentDialog() {
    this.dialog.open(UpdateAgentComponent);
  }

  openAgentPlanDialog() {
    this.dialog.open(DeleteAgentComponent);
  }
}

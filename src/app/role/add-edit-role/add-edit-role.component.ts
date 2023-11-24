import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.css']
})
export class AddEditRoleComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  @Input() rol: any;
  RoleId = "";
  RoleName = "";

  ngOnInit(): void {

    this.RoleId = this.rol.RoleId;
    this.RoleName = this.rol.RoleName;
  }

  addRole() {
    var ro = {
      RoleId: this.RoleId,
      RoleName: this.RoleName
    };
    this.service.addRole(ro).subscribe(res => {
      alert(res.toString());
    });
  }

  updateRole() {
    var ro = {
      RoleId: this.RoleId,
      RoleName: this.RoleName
    };
    this.service.updateRole(ro).subscribe(res => {
      alert(res.toString());
    });
  }
}

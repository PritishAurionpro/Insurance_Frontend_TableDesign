import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  constructor(private service: ApiserviceService) { }

  RoleList: any = [];
  ModalTitle = "";
  ActivateAddEditRoleComp: boolean = false;
  rol: any;

  RoleIdFilter = "";
  RoleNameFilter = "";
  RoleListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshRoleList();
  }

  addClick() {
    this.rol = {
      RoleId: "0",
      RoleName: ""
    }
    this.ModalTitle = "Add Role";
    var str = this.RoleList.roleId
    console.log(str)
    this.ActivateAddEditRoleComp = true;
  }

  editClick(item: any) {
    this.rol = item;
    this.ModalTitle = "Edit Role";
    this.ActivateAddEditRoleComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      console.log(item)
      this.service.deleteRole(item.roleId).subscribe(data => {
        alert(data.toString());
        this.refreshRoleList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditRoleComp = false;
    this.refreshRoleList();
  }


  refreshRoleList() {
    this.service.getRoleList().subscribe(data => {
      this.RoleList = data;
      this.RoleListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.RoleList = this.RoleListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var RoleIdFilter = this.RoleIdFilter;
    var RoleNameFilter = this.RoleNameFilter;

    this.RoleList = this.RoleListWithoutFilter.filter(
      function (el: any) {
        return el.RoleId.toString().toLowerCase().includes(
          RoleIdFilter.toString().trim().toLowerCase()
        ) &&
          el.RoleName.toString().toLowerCase().includes(
            RoleNameFilter.toString().trim().toLowerCase())
      }
    );
  }
}

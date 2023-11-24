import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClaimComponent } from './claim/claim.component';
import { DocumentComponent } from './document/document.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsuranceSchemeComponent } from './insurance-scheme/insurance-scheme.component';
import { PaymentComponent } from './payment/payment.component';
import { SchemeDetailComponent } from './scheme-detail/scheme-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component'; 
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AgentComponent } from './agent/agent.component';
import { CustomerComponent } from './customer/customer.component';
import { LogoutNavigationComponent } from './logout-navigation/logout-navigation.component';  
import { LogoutComponent } from './logout/logout.component';
//Admin modules
import { ManageAgentComponent } from './manage-agent/manage-agent.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageInsurancePlanComponent } from './manage-insurance-plan/manage-insurance-plan.component';
import { ManageInsuranceSchemeComponent } from './manage-insurance-scheme/manage-insurance-scheme.component';
//Employee Modules
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
/*import { ManageAgentComponent } from './manage-agent/manage-agent.component'; */ //alreday there in admin
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageDocumentComponent } from './manage-document/manage-document.component';

import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { RoleComponent } from './role/role.component';


 


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'insurance-plan', component: InsurancePlanComponent },
  { path: 'insurance-policy', component: InsurancePolicyComponent },
  { path: 'insurance-scheme', component: InsuranceSchemeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'scheme-detail', component: SchemeDetailComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin' , component: AdminComponent},
  { path: 'employee', component:EmployeeComponent},
  { path: 'agent', component:AgentComponent},
  { path: 'customer', component:CustomerComponent},
  { path: 'logoutnavigation', component:LogoutNavigationComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'manage-agent', component: ManageAgentComponent },
  { path: 'role', component: RoleComponent },
  
/*
    { path: 'manage-employee', component: ManageEmployeeComponent },
    { path: 'manage-insurance-plan', component: ManageInsurancePlanComponent },
    { path: 'manage-insurance-scheme', component: ManageInsuranceSchemeComponent },
  */
  //Admin Modules
  { path: 'admin/manage-agent', component: ManageAgentComponent },
  { path: 'admin/manage-employee', component: ManageEmployeeComponent },
  { path: 'admin/manage-insurance-plan', component: ManageInsurancePlanComponent },
  { path: 'admin/manage-insurance-scheme', component: ManageInsuranceSchemeComponent },
  //Employee Modules

  { path: 'employee/manage-profile', component: ManageProfileComponent },
  { path: 'employee/manage-agent', component: ManageAgentComponent },
  { path: 'employee/manage-customer', component: ManageCustomerComponent },
  { path: 'employee/manage-document', component: ManageDocumentComponent },

  //Agent 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

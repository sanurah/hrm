import {Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RegisterEmployeeComponent} from "./admin/register-employee/register-employee.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'employee/register', component: RegisterEmployeeComponent, pathMatch: 'full'},
  {path: 'employee/:id', component: EmployeeComponent, pathMatch: 'full'},
];

export default routes;

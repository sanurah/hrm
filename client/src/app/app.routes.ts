import {Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RegisterEmployeeComponent} from "./admin/register-employee/register-employee.component";

const routes: Routes = [
  {path: 'employee/register', component: RegisterEmployeeComponent, pathMatch: 'full'},
  {path: 'employee/:id', component: EmployeeComponent, pathMatch: 'full'},
];

export default routes;

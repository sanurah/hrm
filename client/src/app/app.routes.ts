import {Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {LoginComponent} from "./login/login.component";
import {RegisterUserComponent} from "./admin/register-user/register-user.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterUserComponent, pathMatch: 'full'},
  {path: 'employee/:id', component: EmployeeComponent, pathMatch: 'full'},
];

export default routes;

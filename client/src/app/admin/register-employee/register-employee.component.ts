import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeModel} from "../../model/employee.model";
import {EmployeeService} from "../../service/employee.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  formData: FormGroup;

  constructor(private employeeService: EmployeeService) {
    this.formData = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
  }

  ngOnInit() {
  }

  onClickSubmit(employee: EmployeeModel) {
    return this.employeeService.registerEmployee(employee).pipe(take(1)).subscribe(
      (emp) => {
        //do something
      }
    );
  }

}

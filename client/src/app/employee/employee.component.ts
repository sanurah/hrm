import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../service/employee.service";
import {take} from "rxjs/operators";
import {EmployeeModel} from "../model/employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee ?: EmployeeModel;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getEmployee(params['id']);
    });
  }

  getEmployee(id: string): void {
    this.employeeService.getEmployee(id).pipe(take(1)).subscribe(
      (emp) => {
        this.employee = emp as EmployeeModel;
      }
    );
  }

}

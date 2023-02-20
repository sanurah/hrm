import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {EmployeeModel} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpService) {}

  getEmployee(id: string): Observable<Object> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };
    return this.httpService.doGet("http://localhost:8080/api/v1/employee/"+id, options);
  }

  registerEmployee(employee: EmployeeModel): Observable<Object> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };
    return this.httpService.doPut("http://localhost:8080/api/v1/employee", employee, options);
  }
}

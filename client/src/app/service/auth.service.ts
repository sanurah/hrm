import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpService} from "./http.service";
import {AuthModel} from "../model/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) {
  }

  login(auth: AuthModel): Observable<Object> {
    // let body = new URLSearchParams();
    // body.append('username', auth.username);
    // body.append('password', auth.password);

    const headers: HttpHeaders = new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
      withCredentials: true,
    };
    return this.httpService.doPost("http://localhost:8080/api/v1/auth/authenticate", auth, options);
  }

  register(auth: AuthModel): Observable<Object> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
      withCredentials: true,
    };

    return this.httpService.doPost("http://localhost:8080/api/v1/auth/register", auth, options);
  }

}

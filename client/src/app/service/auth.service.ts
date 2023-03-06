import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) {
  }

  login(username: string, password: string): Observable<Object> {
    let body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const options = {
      headers: headers,
      withCredentials: true,
    };
    return this.httpService.doPost("http://localhost:8080/login", body.toString(), options);
  }
}

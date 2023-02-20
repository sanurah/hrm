import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  doPost(
    url: string,
    body: any,
    options: { headers: HttpHeaders }
  ): Observable<Object> {
    return this.httpClient.post(url, body, options);
  }

  doPut(
    url: string,
    body: any,
    options: { headers: HttpHeaders }
  ): Observable<Object> {
    return this.httpClient.put(url, body, options);
  }

  doGet(url: string, options: { headers: HttpHeaders }): Observable<Object> {
    return this.httpClient.get(url, options);
  }
}

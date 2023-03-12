import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionConstant {
  public static AUTH_TOKEN: string = "auth-token";
}

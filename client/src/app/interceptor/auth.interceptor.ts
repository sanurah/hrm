import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.authService.getToken();

    if (authToken == null) {
      this.router.navigateByUrl("/login");
      return next.handle(req);
    } else {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', "Bearer " + authToken)
      });
      return next.handle(authReq);
    }
  }
}

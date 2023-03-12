import {Component, OnInit} from '@angular/core';
import {AuthModel} from "../model/auth.model";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {take} from "rxjs/operators";
import {TokenModel} from "../model/token.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.formData = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onClickSubmit(auth: AuthModel): void {
    const isLoggedIn = this.authService.login(auth).pipe(take(1)).subscribe(
      (token) => {
        const tokenModel = token as TokenModel;
        sessionStorage.setItem("token", tokenModel.token);
        this.router.navigateByUrl("/");
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.router.navigateByUrl("/login?error=true");
      }
    );
  }

}

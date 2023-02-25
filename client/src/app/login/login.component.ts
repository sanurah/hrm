import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {take} from "rxjs/operators";
import {AuthService} from "../service/auth.service";
import {AuthModel} from "../model/auth.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;

  constructor(private authService: AuthService) {
    this.formData = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
  }

  onClickSubmit(auth: AuthModel) {
    return this.authService.login(auth.username, auth.password).pipe(take(1)).subscribe(
      (emp) => {
        //do something
      }
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthModel} from "../model/auth.model";
import {take} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";

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

  ngOnInit(): void {
  }

  onClickSubmit(auth: AuthModel) {
    return this.authService.login(auth.username, auth.password).pipe(take(1)).subscribe(
      () => {
        //do something
      }
    );
  }

}

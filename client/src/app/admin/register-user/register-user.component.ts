import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {take} from "rxjs/operators";
import {AuthService} from "../../service/auth.service";
import {AuthModel} from "../../model/auth.model";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  formData: FormGroup;

  constructor(private authService: AuthService) {
    this.formData = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
  }

  onClickSubmit(authModel: AuthModel) {
    return this.authService.register(authModel).pipe(take(1)).subscribe(
      (emp) => {
        //do something
      }
    );
  }

}

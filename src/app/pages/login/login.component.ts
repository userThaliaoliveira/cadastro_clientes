import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;

  constructor (
    private loginService:LoginService, 
    private router: Router,
    private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      user: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl ('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit (user: User) {
    if (this.loginForm.valid) {
      if (this.loginService.validate(user.user, user.password)) {
        this.router.navigate (['customersList'])
      }
      else {
        this.toastr.error('Invalid user or password.', 'Error!')
      }
    }
    else {
      this.toastr.warning('Enter valid values.', 'Warning!')
    }
  }

}

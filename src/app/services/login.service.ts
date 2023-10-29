import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User = {
    user:'admin',
    password: 'admin'
  }

  validate(user: string, password: string) {
    if (this.user.user === user && this.user.password === password) 
       return true
    else 
      return false
  };
}

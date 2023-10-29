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
    // Inicializa o formulário de login com campos de usuário e senha, incluindo validações
    this.loginForm = new FormGroup({
      user: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl ('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit (user: User) {
    if (this.loginForm.valid) {
      // Verifica se o formulário é válido
      if (this.loginService.validate(user.user, user.password)) {
        // Se as credenciais forem válidas, redireciona para a lista de clientes
        this.router.navigate (['customersList']);
      }
      else {
        // Se as credenciais forem inválidas, exibe uma mensagem de erro
        this.toastr.error('Usuário ou senha inválidos.', 'Erro!');
      }
    }
    else {
      // Se o formulário não for válido, exibe uma mensagem de aviso
      this.toastr.warning('Insira valores válidos.', 'Aviso!');
    }
  }
}

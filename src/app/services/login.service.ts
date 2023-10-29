import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User = {
    user: 'admin',
    password: 'admin'
  };

  // Função para validar as credenciais do usuário
  validate(user: string, password: string) {
    if (this.user.user === user && this.user.password === password) {
      // Compara as credenciais fornecidas com as credenciais de usuário padrão
      return true; // Retorna verdadeiro se as credenciais forem válidas
    } else {
      return false; // Retorna falso se as credenciais forem inválidas
    }
  }
}

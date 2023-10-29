import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  
  constructor(private router: Router) {
    // Construtor da classe AddClientComponent
  }

  // Função que redireciona para a edição de cliente com o ID fornecido
  goToCustomerEdit(id: number) {
    this.router.navigate(['customersEdit', id]);
    // Usa o serviço de roteamento para navegar para a página de edição do cliente com o ID especificado
  }
}

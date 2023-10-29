import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: Customer[] = [];
  customerIdSelectedToDelete: number = -1;

  constructor(private customerService: CustomerService, private router: Router) {
    // Construtor da classe ListComponent
  }

  ngOnInit(): void {
    // Carrega a lista de clientes ao inicializar o componente
    this.customers = this.customerService.getList();
  }

  // Função que redireciona para a edição de cliente com o ID fornecido
  goToCustomerEdit(id: number) {
    this.router.navigate(['customersEdit', id]);
  }

  // Função para excluir um cliente com confirmação
  delete(id: number, name: string) {
    // Exibe uma caixa de diálogo de confirmação
    var answer = window.confirm(`Você realmente deseja excluir o cliente ${name}?`);

    if (answer) {
      // Se o usuário confirmar, exclui o cliente e atualiza a lista
      this.customerService.delete(id);
      this.ngOnInit();
    } else {
      // Se o usuário cancelar, redireciona de volta para a lista de clientes
      this.router.navigate(['customersList']);
    }
  }
}

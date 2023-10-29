import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() {
    // Inicializa o serviço com alguns clientes de exemplo
    let customer: Customer = {
      id: 1,
      name: 'Paulo',
      email: 'paulinho@email.com',
      birthdate: new Date('1990-10-07')
    };

    let customer2: Customer = {
      id: 2,
      name: 'Claudio',
      email: 'claudio@email.com',
      birthdate: new Date('1975-09-20')
    };

    this.customers.push(customer);
    this.customers.push(customer2);
  }

  getList(): Customer[] {
    return this.customers;
    // Retorna a lista de clientes armazenada no serviço
  }

  getById(id: number) {
    return this.customers.find(customer => customer.id === id);
    // Encontra e retorna um cliente com base no ID fornecido
  }

  update(customer: Customer) {
    let searchCustomer = this.getById(customer.id);

    if (searchCustomer) {
      searchCustomer.name = customer.name;
      searchCustomer.email = customer.email;
      searchCustomer.birthdate = customer.birthdate;
      // Atualiza as informações do cliente com base no ID
    }
  }

  add(customer: Customer) {
    let previousID = this.getMaxId();

    if (previousID)
      customer.id = previousID + 1;
    else
      customer.id = 1;

    this.customers.push(customer);
    // Adiciona um novo cliente à lista de clientes
  }

  delete(id: number) {
    const i = this.customers.findIndex(customer => customer.id === id);

    if (i > -1) {
      this.customers.splice(i, 1);
      // Exclui um cliente com base no ID fornecido
    }
  }

  getMaxId() {
    return this.customers.reduce((maxId, current) => {
      return current.id > maxId ? current.id : maxId;
      // Encontra o maior ID entre os clientes para atribuir a um novo cliente
    }, 0);
  }
}

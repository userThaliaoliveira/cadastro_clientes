import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() {

    let customer: Customer = {
      id: 1,
      name: 'paulo',
      email: "paulinho@email.com",
      birthdate: new Date("1990-10-07")
    }
    let customer2: Customer = {
      id: 2,
      name: 'claudio',
      email: "claudio@email.com",
      birthdate: new Date("1975-09-20")
    }

    this.customers.push(customer)
    this.customers.push(customer2)
  };

  getList(): Customer[] {
    return this.customers;
  };

  getById(id: number) {
    return this.customers.find(customer => customer.id === id);
  };

  update(customer:Customer) {
    let searchCustomer = this.getById(customer.id);

    if( searchCustomer){
      searchCustomer.name = customer.name;
      searchCustomer.email = customer.email;
      searchCustomer.birthdate = customer.birthdate;
    }
  };

  add(customer: Customer) {
    let previousID = this.getMaxId();
    console.log (previousID)

    if (previousID)
      customer.id = previousID + 1;
    else
      customer.id = 1;

    this.customers.push(customer);
  }

  delete(id: number) {
    const i = this.customers.findIndex(customer => customer.id === id);
    if (i > -1) {
      this.customers.splice(i, 1);
    };
  };

  getMaxId() {
    return this.customers.reduce((maxId, current) => {
      return current.id > maxId ? current.id : maxId
    }, 0)
  }
}

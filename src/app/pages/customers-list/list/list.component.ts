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

  }

  ngOnInit(): void {
    this.customers = this.customerService.getList();
  }

  goToCustomerEdit(id: number) {
    this.router.navigate(['customersEdit', id]);
  }

  delete(id: number, name:string) {

    var answer = window.confirm(`Do you really want to delete the customer ${name}?`);

    if (answer) {
      this.customerService.delete(id);
      this.ngOnInit();
    }
    else {
      this.router.navigate(['customersList']);
    }

  }


}


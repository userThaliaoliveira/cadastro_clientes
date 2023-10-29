import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  
  constructor(private router: Router) {

  }

  goToCustomerEdit(id: number) {
    this.router.navigate(['customersEdit', id]);
  }

}

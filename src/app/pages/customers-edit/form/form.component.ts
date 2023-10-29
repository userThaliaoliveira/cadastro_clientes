import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number = -1;
  customerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router) {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      birthdate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  };
  ngOnInit() {
    const getId = Number(this.route.snapshot.paramMap.get('id'));
    if (getId) {
      this.id = getId;
      const currentCustomer = this.customerService.getById(this.id);

      this.customerForm = new FormGroup({
        name: new FormControl(currentCustomer?.name, [Validators.required]),
        birthdate: new FormControl(currentCustomer?.birthdate, [Validators.required]),
        email: new FormControl(currentCustomer?.email, [Validators.required, Validators.email])
      });
    };
  };

  onSubmit(customer: Customer) {
    try {
      if (this.id === -1)
        this.customerService.add(customer);
      else {
        customer.id = this.id;
        this.customerService.update(customer);
      }
      this.router.navigate(['customersList'])
      this.toastr.success('Client saved successfully', 'Success!')
    } catch (error) {
      this.toastr.error('Error while saving client', 'Error!');
      console.log(error)
    };
  };
};

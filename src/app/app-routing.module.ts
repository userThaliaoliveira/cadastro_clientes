import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomersEditComponent } from './pages/customers-edit/customers-edit.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'customersList', component: CustomersListComponent },
  { path: 'customersEdit/:id', component: CustomersEditComponent },
  { path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersEditComponent } from './pages/customers-edit/customers-edit.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { FormComponent } from './pages/customers-edit/form/form.component';
import { ListComponent } from './pages/customers-list/list/list.component';
import { AddClientComponent } from './pages/customers-list/add-client/add-client.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CustomersEditComponent,
    CustomersListComponent,
    FormComponent,
    ListComponent,
    AddClientComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

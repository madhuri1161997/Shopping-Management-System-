import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 FormsModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
 providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

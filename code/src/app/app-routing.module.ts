import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
{ path: 'users', component: UserListComponent },
 { path: 'adduser', component: UserFormComponent },
 {path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

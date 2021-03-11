import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditAccountComponent } from './add-edit-account/add-edit-account.component';


const routes: Routes = [
  {
    path: 'add-account', component: AddEditAccountComponent
  },
  {
    path: 'edit-account/:id', component: AddEditAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

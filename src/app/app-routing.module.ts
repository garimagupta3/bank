import { FavoriteAccountsComponent } from './favorite-accounts/favorite-accounts.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditAccountComponent } from './add-edit-account/add-edit-account.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'favorite-accounts', component: FavoriteAccountsComponent
  },
  {
    path: 'add-account', component: AddEditAccountComponent
  },
  {
    path: '', component: LoginComponent
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

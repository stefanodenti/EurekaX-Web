import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthManagerComponent } from '../auth/pages/auth-manager/auth-manager.component';
import { UsersManagerComponent } from '../auth/pages/users-manager/users-manager.component';

const routes: Routes = [{
  path: "users",
  component: UsersManagerComponent,
},
{
  path: 'permissions',
  component: AuthManagerComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

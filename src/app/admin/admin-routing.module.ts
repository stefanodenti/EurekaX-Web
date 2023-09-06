import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagerComponent } from './pages/users-manager/users-manager.component';

const routes: Routes = [{
  path: "users",
  component: UsersManagerComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

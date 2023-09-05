import { AuthGuard } from 'src/app/auth/interceptor/auth.guard';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthAdminGuard } from './auth/interceptor/auth-admin.guard';

const routes: Routes = [
  {
    path: '',  loadChildren: () => import('./layouts/standard/standard.module').then(m => m.StandardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

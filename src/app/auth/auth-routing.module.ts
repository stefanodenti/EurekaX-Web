import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { VerifyEmailAddressPage } from './pages/verify-email-address/verify-email-address.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { AuthGuard } from './interceptor/auth.guard';
import { AuthAdminGuard } from './interceptor/auth-admin.guard';
import { UsersManagerComponent } from './pages/users-manager/users-manager.component';
import { AuthManagerComponent } from './pages/auth-manager/auth-manager.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailAddressPage
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: 'auth-manager',
    component: AuthManagerComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'users-manager',
    component: UsersManagerComponent,
    canActivate: [AuthAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

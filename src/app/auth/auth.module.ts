import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { VerifyEmailAddressPage } from './pages/verify-email-address/verify-email-address.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SignInPage,
    SignUpPage,
    ForgotPasswordPage,
    VerifyEmailAddressPage,
    UserProfilePage
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        FontAwesomeModule,
    ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }

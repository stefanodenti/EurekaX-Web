import { AppSettingsComponent } from './../../pages/app-settings/app-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LayoutStandardComponent } from './layout-standard.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { PrivacyComponent } from 'src/app/pages/privacy/privacy.component';
import { AuthGuard } from 'src/app/auth/interceptor/auth.guard';
import { UserProfilePage } from 'src/app/auth/pages/user-profile/user-profile.page';

const routes: Routes = [
  {
    path: '', component: LayoutStandardComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contacts',
      component: ContactsComponent
    },
    {
      path: 'privacy',
      component: PrivacyComponent
    },
    {
      path: 'settings',
      component: AppSettingsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'user-profile',
      component: UserProfilePage,
      canActivate: [AuthGuard]
    },
  ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardRoutingModule { }

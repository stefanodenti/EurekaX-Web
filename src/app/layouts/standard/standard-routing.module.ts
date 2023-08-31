import { AppSettingsComponent } from './../../pages/app-settings/app-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { LayoutStandardComponent } from './layout-standard.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

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
      path: 'settings',
      component: AppSettingsComponent
    }
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

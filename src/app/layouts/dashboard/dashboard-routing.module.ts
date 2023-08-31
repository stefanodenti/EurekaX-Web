import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout-dashboard.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { AppSettingsComponent } from 'src/app/pages/app-settings/app-settings.component';

const routes: Routes = [
  {
    path: 'dashboard', component: LayoutDashboardComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contacts',
      component: ContactsComponent
    },
    {
      path: 'asettings',
      component: AppSettingsComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

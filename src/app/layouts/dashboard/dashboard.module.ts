import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutDashboardComponent } from './layout-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    LayoutDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }

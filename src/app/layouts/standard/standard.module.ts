import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardRoutingModule } from './standard-routing.module';
import { LayoutStandardComponent } from './layout-standard.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [LayoutStandardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule,
    CoreModule
  ]
})
export class StandardModule { }

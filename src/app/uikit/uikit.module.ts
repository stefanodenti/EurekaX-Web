import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { HeroComponent } from './blocks/hero/hero.component';
import { DropdownDirective } from './directives/dropdown.directive';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    BaseCardComponent,
    ImageCardComponent,
    HeroComponent,
    DropdownDirective,
    TableComponent,
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        NgxDatatableModule
    ],
  exports: [
    BaseCardComponent,
    ImageCardComponent,
    HeroComponent,
    DropdownDirective,
    TableComponent
  ]
})
export class UikitModule { }

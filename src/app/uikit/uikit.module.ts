import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { HeroComponent } from './blocks/hero/hero.component';
import { DropdownDirective } from './directives/dropdown.directive';



@NgModule({
  declarations: [
    BaseCardComponent,
    ImageCardComponent,
    HeroComponent,
    DropdownDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseCardComponent,
    ImageCardComponent,
    HeroComponent,
    DropdownDirective,
  ]
})
export class UikitModule { }

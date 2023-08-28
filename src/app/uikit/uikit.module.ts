import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';



@NgModule({
  declarations: [
    BaseCardComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseCardComponent,
    ImageCardComponent
  ]
})
export class UikitModule { }

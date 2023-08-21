import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';


@NgModule({
    declarations: [FooterComponent, NavbarComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
    ],
})
export class CoreModule {
}

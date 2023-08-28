import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
    declarations: [FooterComponent, NavbarComponent, SidenavComponent, NotificationsComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SidenavComponent,
        NotificationsComponent
    ],
})
export class CoreModule {
    
}
 
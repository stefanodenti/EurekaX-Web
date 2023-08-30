import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [FooterComponent, NavbarComponent, SidenavComponent, NotificationsComponent, DarkModeToggleComponent, ThemeSelectorComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        SidenavComponent,
        NotificationsComponent,
        DarkModeToggleComponent,
        ThemeSelectorComponent
    ],
})
export class CoreModule {
    
}
 
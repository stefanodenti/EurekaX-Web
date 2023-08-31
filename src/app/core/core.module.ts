import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
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
 
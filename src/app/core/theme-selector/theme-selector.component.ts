import { Component, effect } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'eurekax-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  activeTheme = '';
  constructor(public themeService: ThemeService) {
    effect(() => {
      this.activeTheme = this.themeService.theme().name;
    })
  }


  changeTheme(event: Event) {
    this.themeService.changeTheme(this.activeTheme);
  }
}

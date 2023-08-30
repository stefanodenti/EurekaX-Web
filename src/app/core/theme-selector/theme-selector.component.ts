import {Component, effect, OnChanges} from '@angular/core';
import { ThemeService } from '../services/theme.service';
import {Palette, Theme} from "../models/config.model";

@Component({
  selector: 'eurekax-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  constructor(public themeService: ThemeService) {

  }


  changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme.name);
  }

  setOptionStyle(palette: Palette) {
    return {
      'background-color': palette.base
    };
  }
}

import { Injectable, signal } from '@angular/core';
import { Theme } from '../models/config.model';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = signal<boolean>(false);
  theme = signal<Theme>({
    name: '',
    darkMode: {
      defaultSchema: 'dark',
      detectMode: 'auto'
    },
    light: {
      primary: '',
      secondary: '',
      tertiary: '',
      base: '',
      success: '',
      warning: '',
      error: '',
      layout: '',
      card: ''
    },
    dark: {
      primary: '',
      secondary: '',
      tertiary: '',
      base: '',
      success: '',
      warning: '',
      error: '',
      layout: '',
      card: ''
    },
    logo: ''
  });
  themes = signal<Theme[]>([]);

  constructor() {}

  initializeTheme(theme: any) {
    if (theme?.darkMode.detectMode === 'auto') {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        this.isDark.set(true);
      } else {
        this.isDark.set(false)
      }
    } else {
      if (theme?.darkMode.defaultSchema === 'dark') {
        this.isDark.set(true);
      } else {
        this.isDark.set(false)
      }
    }

    this.theme.set(theme);
    this.setTheme();
  }

  setTheme() {
    document.getElementsByTagName('body')?.item(0)?.classList.add('transition-theme');
    if (this.isDark()) {
      document.getElementsByTagName('body')?.item(0)?.classList.add('dark');
      document.documentElement.style.setProperty(`--primary-color`, this.theme()?.dark.primary);
      document.documentElement.style.setProperty(`--secondary-color`, this.theme()?.dark.secondary);
      document.documentElement.style.setProperty(`--tertiary-color`, this.theme()?.dark.tertiary);
      document.documentElement.style.setProperty(`--base-color`, this.theme()?.dark.base);
      document.documentElement.style.setProperty(`--layout-color`, this.theme()?.dark.layout);
      document.documentElement.style.setProperty(`--card-color`, this.theme()?.dark.card);
      document.documentElement.style.setProperty(`--success-color`, this.theme()?.dark.success);
      document.documentElement.style.setProperty(`--warning-color`, this.theme()?.dark.warning);
      document.documentElement.style.setProperty(`--error-color`, this.theme()?.dark.error);
    } else {
      document.getElementsByTagName('body')?.item(0)?.classList.remove('dark');
      document.documentElement.style.setProperty(`--primary-color`, this.theme()?.light.primary);
      document.documentElement.style.setProperty(`--secondary-color`, this.theme()?.light.secondary);
      document.documentElement.style.setProperty(`--tertiary-color`, this.theme()?.light.tertiary);
      document.documentElement.style.setProperty(`--base-color`, this.theme()?.light.base);
      document.documentElement.style.setProperty(`--layout-color`, this.theme()?.light.layout);
      document.documentElement.style.setProperty(`--card-color`, this.theme()?.light.card);
      document.documentElement.style.setProperty(`--success-color`, this.theme()?.light.success);
      document.documentElement.style.setProperty(`--warning-color`, this.theme()?.light.warning);
      document.documentElement.style.setProperty(`--error-color`, this.theme()?.light.error);
    }
    const duration = this.getThemeAnimationDuration();
    setTimeout(() => {
      document.getElementsByTagName('body')?.item(0)?.classList.remove('transition-theme');
    }, duration + 2000)

  }

  toggleDark() {
    this.isDark.set(!this.isDark());
    this.setTheme();
  }

  changeTheme(name:string){
    const theme = this.themes().find(t => t.name === name) ?? this.themes()[0];
    this.theme.set(theme);
    this.setTheme();
  }

  private getThemeAnimationDuration(): number {
    let durationString = getComputedStyle(document.documentElement)
      .getPropertyValue('--transition-theme-duration');
    if(durationString[0] === '.') {
      durationString = '0' + durationString;
    }
    if(durationString.includes('ms')) {
      return +durationString.slice(0, durationString.indexOf('m'));
    } else if(durationString.includes('s')) {
      return +durationString.slice(0, durationString.indexOf('s')) * 1000;
    }

    return 0;
  }
}

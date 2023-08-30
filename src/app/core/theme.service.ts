import {computed, effect, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = signal<boolean>(false);
  theme = signal<any>(null);

  constructor(private http: HttpClient) {
    this.http.get(`assets/eurekax.theme.json`)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.initializeTheme(res.theme);
        }
      });
  }

  initializeTheme(theme: any) {
    if(theme?.darkMode.detectMode === 'auto') {
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
    console.log('SET THEME')
    if(this.isDark()) {
      document.getElementsByTagName('body')?.item(0)?.classList.add('dark');
      document.documentElement.style.setProperty(`--primary-color`, this.theme()?.dark.primary);
      document.documentElement.style.setProperty(`--secondary-color`, this.theme()?.dark.secondary);
      document.documentElement.style.setProperty(`--tertiary-color`, this.theme()?.dark.tertiary);
    } else {
      document.getElementsByTagName('body')?.item(0)?.classList.remove('dark');
      document.documentElement.style.setProperty(`--primary-color`, this.theme()?.light.primary);
      document.documentElement.style.setProperty(`--secondary-color`, this.theme()?.light.secondary);
      document.documentElement.style.setProperty(`--tertiary-color`, this.theme()?.light.tertiary);
    }
  }

  toggleDark() {
    this.isDark.set(!this.isDark());
    this.setTheme();
  }

}

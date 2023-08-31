import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LayoutService} from "./layout.service";
import {ThemeService} from "./theme.service";
import {AppConfig} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(
    private http: HttpClient,
    private layoutService: LayoutService,
    private themeService: ThemeService
  ) {
  }

  initialize() {
    this.http.get<AppConfig>(`assets/eurekax.config.json`)
      .subscribe({
        next: (res: AppConfig) => {
          console.log('LAYOUTS', res.layouts);

          this.layoutService.setLayouts(res.layouts);
          this.themeService.initializeTheme(res.themes[0]);
          this.themeService.themes.set(res.themes);
        },
        error: (err) => {
          console.error("LOAD CONFIG", err.error);
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {SidenavService} from "../sidenav/sidenav.service";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'eurekax-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMobileMenu = false;

  constructor(private sidenavService: SidenavService, private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

  changeColor() {
    document.documentElement.style.setProperty(`--primary-color`, '#c71c1c');
  }

  toggleTheme() {
    this.themeService.toggleDark();
  }
}

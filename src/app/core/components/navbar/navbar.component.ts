import {Component, Input, OnInit} from '@angular/core';
import {SidenavService} from "../sidenav/sidenav.service";
import {ThemeService} from "../../services/theme.service";
import {NavBar} from "../../models/config.model";

@Component({
  selector: 'eurekax-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() config: NavBar | null = null;
  @Input() showMenuButton: boolean = true;
  showMobileMenu = false;

  constructor(private sidenavService: SidenavService, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

}

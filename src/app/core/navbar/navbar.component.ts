import { Component, OnInit } from '@angular/core';
import {SidenavService} from "../sidenav/sidenav.service";

@Component({
  selector: 'eurekax-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMobileMenu = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

}

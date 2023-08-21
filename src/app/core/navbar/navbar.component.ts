import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eurekax-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMobileMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}

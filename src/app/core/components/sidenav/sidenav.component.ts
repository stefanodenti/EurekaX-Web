import {Component, HostListener, OnInit, signal} from '@angular/core';
import {SidenavService} from "./sidenav.service";



@Component({
  selector: 'eurekax-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth)
    const windowWidth: number = event.target.innerWidth
   	this.isMobile.set(windowWidth < 400);
  }
  isMobile = signal<boolean>(window.innerWidth < 400);
  sidenavStatus = this.sidenavService.sidenavStatus;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }

}

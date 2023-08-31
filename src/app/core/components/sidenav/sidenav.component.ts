import {Component, HostListener, Input, OnInit, signal} from '@angular/core';
import {SidenavService} from "./sidenav.service";
import {Sidenav} from "../../models/config.model";
import { ThemeService } from '../../services/theme.service';



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
  @Input() config: Sidenav | null = null;
  isMobile = signal<boolean>(window.innerWidth < 400);
  sidenavStatus = this.sidenavService.sidenavStatus;

  constructor(private sidenavService: SidenavService, public themeService: ThemeService) {
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }

}

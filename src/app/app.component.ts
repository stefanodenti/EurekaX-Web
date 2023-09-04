import {Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";
import {AppConfigService} from "./core/services/app-config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EurekaX-Web';

  constructor(private appConfigService: AppConfigService) {
    this.appConfigService.initialize();
  }

  ngOnInit() {
    initFlowbite();
  }
}

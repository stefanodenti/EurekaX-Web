import {Component, Input} from '@angular/core';
import {Navigation} from "../../models/config.model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'eurekax-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class NavigationComponent {
  @Input() navigation: Navigation | null = null;

}

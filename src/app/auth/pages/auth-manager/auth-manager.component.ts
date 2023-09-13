import { Component } from '@angular/core';
import {Action} from "../../models/user";

@Component({
  templateUrl: './auth-manager.component.html',
  styleUrls: ['./auth-manager.component.scss']
})
export class AuthManagerComponent {

  saveAction(action: Action) {
    console.log(action)
  }
}

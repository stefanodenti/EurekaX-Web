import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  showNotificationsCenter() {
    console.log("showNotificationsCenter")
  }

  showHelpModal() {
    console.log("showHelpModal.")
  }

  showSucessAlert() {
    console.log("showSucessAlert.")
  }

  showWarningAlert() {
    console.log("showWarningAlert.")
  }

  showErrorAlert() {
    console.log("showErrorAlert.")
  }
}

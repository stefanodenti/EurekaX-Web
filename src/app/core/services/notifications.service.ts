import {Injectable, signal} from '@angular/core';
import {Notification, NotificationPresentationType, NotificationType} from "../models/notification.model";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notifications = signal<Notification[]>([]);
  private newAlert$: Subject<Notification> = new Subject<Notification>();
  notificationCenterStatus = signal<'open' | 'close'>('close');

  constructor() { }

  get newAlert(): Observable<Notification> {
    return this.newAlert$.asObservable();
  }
  toggleNotificationCenter() {
    this.notificationCenterStatus.update(value => {
      if(value === 'open') {
        return 'close';
      } else {
        return 'open';
      }
    });
  }

  openNotificationCenter() {
    this.notificationCenterStatus.set('open');
  }

  closeNotificationCenter() {
    this.notificationCenterStatus.set('close');
  }

  createAlert(config: Partial<Notification>) {
    this.newAlert$.next({
      id: Date.now().toString(),
      icon: config.icon,
      createdAt: Date.now(),
      title: config.title ?? '',
      message: config.message ?? '',
      type: config.type ?? NotificationType.base,
      presentation: NotificationPresentationType.alert,
      read: false,
      routerLink: config.routerLink,
    });
  }


  showHelpModal() {
    console.log("showHelpModal.")
  }

  showSuccessAlert() {
    console.log("showSucessAlert.")
  }

  showWarningAlert() {
    console.log("showWarningAlert.")
  }

  showErrorAlert() {
    console.log("showErrorAlert.")
  }

}

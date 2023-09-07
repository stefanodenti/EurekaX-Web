import {Component, HostListener, Input, signal} from '@angular/core';
import {NotificationsService} from "../../services/notifications.service";
import {Sidenav} from "../../models/config.model";

@Component({
  selector: 'eurekax-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth)
    const windowWidth: number = event.target.innerWidth
    this.isMobile.set(windowWidth < 400);
  }
  notifications = this.notificationService.notifications;
  isMobile = signal<boolean>(window.innerWidth < 400);
  notificationCenterStatus = this.notificationService.notificationCenterStatus;


  constructor(private notificationService: NotificationsService) {
  }

  toggleNotifications() {
    this.notificationService.toggleNotificationCenter();
  }
}

import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {Notification, NotificationType} from "../../models/notification.model";
import {interval, Subject, Subscription, take, takeUntil, timer} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'eurekax-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnDestroy {
  @Input({required: true}) notification!: Notification;
  @Input() cssClass: string | null = null
  @Input() showCloseButton: boolean = true;

  @Input() set dismissDuration(duration: number) {
    this.duration = duration;
    if(this.duration > 0) {
      this.startDismissDate = new Date();
      this.currentProgress = 0;

      this.restartDismissTimer(duration);
    }
  };

  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();
  currentProgress: number = 0;
  private timerDismiss: Subscription | null = null;
  private startDismissDate: Date = new Date();
  duration: number = 0;
  private elapsedTime: number = 0;
  private destroyTimer: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.stopDismissTimer();
  }

  getNotificationClass() {
    let classesObject: { [p: string]: boolean } = {};
    if (!!this.cssClass) {
      classesObject[this.cssClass] = !!this.cssClass
    }
    return {
      ...classesObject,
      'alert-info': this.notification.type === NotificationType.info,
      'alert-error': this.notification.type === NotificationType.danger,
      'alert-success': this.notification.type === NotificationType.success,
      'alert-warning': this.notification.type === NotificationType.warning,
      '': this.notification.type === NotificationType.base,
    };
  }

  restartDismissTimer(duration: number) {
    this.stopDismissTimer();
		this.destroyTimer = new Subject<void>();
    interval(duration / 100)
      .pipe(takeUntil(this.destroyTimer))
      .subscribe({
        next: () => {
          this.currentProgress += (duration / 100);
          if(this.currentProgress >= this.duration) {
            this.closeClicked.emit();
            this.stopDismissTimer();
            this.duration = 0;
          }
        }
      });
  }

  pauseDismiss() {
    if(this.duration > 0) {
      this.stopDismissTimer();
      this.elapsedTime =  new Date().valueOf() - this.startDismissDate.valueOf();
    }
  }

  restartDismiss() {
    const remainingTime = this.duration - this.elapsedTime;
    if (remainingTime > 0 && this.duration > 0) {
      this.restartDismissTimer(this.duration);
      this.startDismissDate = new Date();
    }
  }

  private stopDismissTimer() {
    this.destroyTimer.next();
    this.destroyTimer.complete();
  }
}

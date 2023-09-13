import {
  Notification,
  NotificationType,
} from './../../../core/models/notification.model';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { QueryFirestoreService } from 'src/app/core/services/query-firestore.service';
import { Filter } from 'src/app/core/models/query.model';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { User } from '../../models/user';

@Component({
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss'],
})
export class UsersManagerComponent {
  rows: User[] = [];
  cols = [{ prop: 'fullName' }, { name: 'email' }];
  filters: Filter[] = [
    {
      keyProp: 'name',
      keyword: '',
      type: 'string',
    },
  ];
  private lastVisibleEl: any;

  constructor(
    private qfService: QueryFirestoreService,
    private notificationService: NotificationsService
  ) {
    this.loadUsers();
  }

  loadUsers() {
    this.qfService.search(this.filters, 'name', 10, null, 'users').subscribe({
      next: (res) => {
        console.log('ReS', res);
        this.lastVisibleEl = res.docs[res.docs.length - 1];
        this.rows = [
          ...this.rows,
          ...res.docs.map((user) => {
            let data = user.data() as User;
            data.uid = user.id;
            return data;
          }),
        ];
      },
      error: (err) => {
        const notification: Partial<Notification> = {
          title: 'Unable to load users!',
          message: err.error.message,
          type: NotificationType.danger,
        };
        this.notificationService.createAlert(notification);
      },
    });
  }
}

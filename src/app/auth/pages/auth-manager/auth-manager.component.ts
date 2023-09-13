import { Component } from '@angular/core';
import { Action, Role } from '../../models/user';
import { QueryFirestoreService } from 'src/app/core/services/query-firestore.service';
import { Filter } from 'src/app/core/models/query.model';
import {
  Notification,
  NotificationType,
} from 'src/app/core/models/notification.model';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  templateUrl: './auth-manager.component.html',
  styleUrls: ['./auth-manager.component.scss'],
})
export class AuthManagerComponent {
  rows: Action[] | Role[] = [];
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
    private queryService: QueryFirestoreService,
    private notificationService: NotificationsService
  ) {
    this.search('auth-actions');
  }

  search(collection: string) {
    this.queryService
      .search(this.filters, 'name', 10, null, collection)
      .subscribe({
        next: (res) => {
          console.log('ReS', res);
          this.lastVisibleEl = res.docs[res.docs.length - 1];
          this.rows = [
            ...this.rows,
            ...res.docs.map((re) => {
              let data = re.data() as Action | Role;
              data.id = re.id;
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
  saveAction(action: Action) {
    console.warn(action);
    this.queryService.create(action, 'auth-actions').then((res) => {
      console.warn('ADD ACTION RES: ', res);
    });
  }

  changeTab(tab: string) {      this.rows = []; 
    this.rows = []; 
    if (tab === 'Roles') {
      this.search('auth-roles');
    } else if (tab === 'Actions') {
      this.search('auth-actions');
    } else if (tab === 'User Types') {
      this.search('auth-usertypes');
    }
  }
}

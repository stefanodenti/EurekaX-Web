import { Component } from '@angular/core';
import { Action, Role, UserType } from '../../models/user';
import { QueryFirestoreService } from 'src/app/core/services/query-firestore.service';
import { Filter } from 'src/app/core/models/query.model';
import {
  Notification,
  NotificationType,
} from 'src/app/core/models/notification.model';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { user } from '@angular/fire/auth';
import { Columns, TableAction } from 'src/app/uikit/components/table/table.component';

@Component({
  templateUrl: './auth-manager.component.html',
  styleUrls: ['./auth-manager.component.scss'],
})
export class AuthManagerComponent {
  rows: Action[] | Role[] = [];
  cols: Columns[] = [
    { prop: 'name', value: 'Name' },
    { prop: 'code', value: 'Code' },
  ];
  tableActions: TableAction[] = [
    {
      code: 'edit',
      icon: 'pen-to-square',
      cssClass: 'text-warning'
    },
    {
      code: 'delete',
      icon: 'trash',
      cssClass: 'text-error'
    }
  ]
  filters: Filter[] = [
    {
      keyProp: 'name',
      keyword: '',
      type: 'string',
    },
  ];
  formVisible = false;
  selectedTab: 'User Types' | 'Roles' | 'Actions' = 'User Types';
  private lastVisibleEl: any;

  constructor(
    private queryService: QueryFirestoreService,
    private notificationService: NotificationsService
  ) {
    this.search('auth-actions');
  }

  search(collection: string) {
    this.queryService
      .search(this.filters, 'name', 10, this.lastVisibleEl, collection)
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

  changeTab(tab: string) {
    this.selectedTab = tab as 'User Types' | 'Roles' | 'Actions';
    this.reset();
    if (tab === 'Roles') {
      this.search('auth-roles');
    } else if (tab === 'Actions') {
      this.search('auth-actions');
    } else if (tab === 'User Types') {
      this.search('auth-usertypes');
    }
  }

  saveUserType(userType: UserType) {
    this.queryService.create(userType, 'auth-usertypes').then((res) => {
      this.reset();
      this.search(this.selectedTab);
    });
  }

  saveRole(role: Role) {
    this.queryService.create(role, 'auth-roles').then((res) => {
      this.reset();
      this.search(this.selectedTab);
    });
  }

  saveAction(action: Action) {
    console.warn(action);
    this.queryService.create(action, 'auth-actions').then((res) => {
      this.reset();
      this.search(this.selectedTab);
    });
  }

  reset() {
    this.formVisible = false;
    this.rows = [];
    this.lastVisibleEl = null;
  }
  fireAction(event: {row:any, actionCode: string}){
    console.warn(event)
  }
}

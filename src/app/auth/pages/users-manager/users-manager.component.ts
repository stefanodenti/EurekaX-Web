import { Notification, NotificationType } from './../../../core/models/notification.model';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { QueryFirestoreService } from 'src/app/core/services/query-firestore.service';
import { Filter } from 'src/app/core/models/query.model';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  templateUrl: './users-manager.component.html',
  styleUrls: ['./users-manager.component.scss']
})
export class UsersManagerComponent {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  cols = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  filters: Filter[] = [{
    keyProp: 'name',
    keyword: '',
    type: 'string'
  }]
  constructor(private qfService: QueryFirestoreService, private notificationService: NotificationsService){
    this.loadUsers()
  }

  loadUsers(){
    this.qfService.search(this.filters, 'name', 10, null, 'users').subscribe({
      next: (res)=>{
        console.log("ReS", res);
      },
      error: (err) => {
        const notification: Partial<Notification> = {
          title: 'Unable to load users!',
          message: err.error.message,
          type: NotificationType.danger,
        }
        this.notificationService.createAlert(notification);
      }
    })
  }
}

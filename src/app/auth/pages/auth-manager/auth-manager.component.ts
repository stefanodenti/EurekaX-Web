import { Component } from '@angular/core';
import { Action } from '../../models/user';
import { QueryFirestoreService } from 'src/app/core/services/query-firestore.service';

@Component({
  templateUrl: './auth-manager.component.html',
  styleUrls: ['./auth-manager.component.scss'],
})
export class AuthManagerComponent {
  constructor(private queryService: QueryFirestoreService) {}
  saveAction(action: Action) {
    this.queryService.create(action, 'auth-actions').then((res) => {
      console.warn('ADD ACTION RES: ', res);
    });
  }
}

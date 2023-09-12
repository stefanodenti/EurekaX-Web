import { Component } from '@angular/core';

@Component({
  selector: 'eurekax-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss']
})
export class ActionTableComponent {
  rows = [
    { name: 'A1', code: 'home.save', description: 'Action 1' },
    { name: 'A2', code: 'home.edit', description: 'Action 2' },
    { name: 'A3', code: 'home.upload', description: 'Action 3' }
  ];
  columns = [{ prop: 'name' }, { name: 'Code' }, { name: 'Description' }];
}

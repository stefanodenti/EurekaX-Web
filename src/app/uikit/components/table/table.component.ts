import { Component, Input } from '@angular/core';
import { SelectionType, SortType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'eurekax-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  elements: any[] = [];
  cols: any[] = [];

  @Input() set rows(data: any) {
    this.elements = data ?? [];
    console.warn('rows', this.elements);
    this.cols = this.createCols(this.elements[0]);
  }

  @Input() set columns(data: any) {
    this.cols = data ?? [];
  }

  @Input() theme = 'material';

  selected: any[] = [];

  constructor() {}

  ngOnInit() {}

  createCols(object: any) {
    const cols: { name: string }[] = [];
    const propertyNames: string[] = Object.keys(object);
    propertyNames.forEach((propertyName) => {
      cols.push({ name: propertyName });
    });
    return cols;
  }

  onSelect(event: any) {
    console.log('Event: select', event, this.selected);
  }

  protected readonly SortType = SortType;
  protected readonly SelectionType = SelectionType;
}

import { Component, Input } from '@angular/core';

export interface Columns{
  prop: string,
  value: string
}
@Component({
  selector: 'eurekax-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  elements: any[] = [];
  cols: Columns[] = [];
  rowElements: any[][] = [[]];
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() hover: boolean = false;
  @Input() zebra: boolean = false;
  @Input() stickyheader: boolean = false;
  @Input() set rows(data: any[]) {
    this.elements = data ?? [];
    this.rowElements = [[]];
    this.elements.forEach((e) => {
      this.rowElements.push(this.generateRow(e));
    });
    console.log(this.rowElements);
  }

  @Input() set columns(data: Columns[]) {
    this.cols = data ?? [];
  }

  selected: any[] = [];

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

  generateRow(row: any) {
    const results: any[] = [];
    if (this.cols) {
      this.cols.forEach((col: any) => {
        results.push(row[col.prop]);
      });
    }
    console.log('CHECK');
    return results;
  }

}

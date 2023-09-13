import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eurekax-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.scss'],
})
export class TabPageComponent {
  @Input() tabs: string[] = ['1', '2'];
  @Input() bordered: boolean = true;
  @Input() size: 'lg' | 'md' | 'sm' = 'lg';
  @Input() activeTab: string = '';
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  selectTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}

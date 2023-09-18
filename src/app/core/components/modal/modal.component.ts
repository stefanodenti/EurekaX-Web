import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {ModalContainerDirective} from "./modal-container.directive";

@Component({
  selector: 'eurekax-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(ModalContainerDirective, {static: true}) modalDirective!: ModalContainerDirective;

  constructor(private elementRef: ElementRef) {
  }


  close() {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit()
  }

}

import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {ModalContainerDirective} from "./modal-container.directive";

@Component({
  selector: 'eurekax-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;
  @Input() position: 'center' | 'top' | 'bottom' = 'center';
  @Input() showCloseButton: boolean = true;
  @Input() backdropDismiss: boolean = true;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(ModalContainerDirective, {static: true}) modalDirective!: ModalContainerDirective;

  constructor(private elementRef: ElementRef) {
  }


  close(backdrop?: boolean) {
    if(!backdrop || (backdrop && this.backdropDismiss)) {
      this.elementRef.nativeElement.remove();
      this.closeEvent.emit()
    }
  }

}

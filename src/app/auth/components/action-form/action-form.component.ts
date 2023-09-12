import {Component, Input} from '@angular/core';
import {Action} from "../../models/user";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'eurekax-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent {
  @Input() action: Action | null = null;
  form = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder) {
  }

}

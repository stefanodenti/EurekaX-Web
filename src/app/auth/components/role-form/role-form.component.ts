import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Action, Role} from "../../models/user";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'eurekax-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent {
  @Input() role: Role | null = null;
  @Output() roleSubmit: EventEmitter<Role> = new EventEmitter<Role>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  form = this.fb.group({
    code: this.fb.nonNullable.control<string>('', Validators.required),
    name: this.fb.nonNullable.control<string>('', Validators.required),
    description: new FormControl<string>(''),
    actions: new FormControl<Action[]>([])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['role']) {
      this.form.reset(!!this.role ? {
        name: this.role.name,
        code: this.role.code,
        description: this.role.description
      } : {});
    }
  }

  submitAction() {
    this.roleSubmit.emit(!this.role ?
      {
        id: '',
        code:( this.form.value.code as string),
        name: this.form.value.name as string,
        description: this.form.value.description ?? null,
        actions: (this.form.value.actions as Action[]) ?? [] } : {
      ...this.role as Role,
      code:( this.form.value.code as string),
      name: this.form.value.name as string,
      description: this.form.value.description ?? null,
      actions: (this.form.value.actions as Action[]) ?? []
    });
  }

  cancelClick(){
    this.cancel.emit(true);
  }

}

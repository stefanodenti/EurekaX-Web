import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {UserType} from "../../models/user";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'eurekax-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.scss']
})
export class UserTypeFormComponent {
  @Input() userType: UserType | null = null;
  @Output() userTypeSubmit: EventEmitter<UserType> = new EventEmitter<UserType>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  form = this.fb.group({
    imageUrl: this.fb.control<string>(''),
    name: this.fb.nonNullable.control<string>('', Validators.required),
    description: new FormControl<string>(''),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!!changes['userType']) {
      this.form.reset(!!this.userType ? {
        name: this.userType.name,
        imageUrl: this.userType.imageUrl,
        description: this.userType.description
      } : {});
    }
  }

  submitAction() {
    this.userTypeSubmit.emit(!this.userType ? {id: '', imageUrl:( this.form.value.imageUrl as string) ?? null, name: this.form.value.name as string, description: this.form.value.description ?? null, roles: [] } : {
      ...this.userType as UserType,
      imageUrl:( this.form.value.imageUrl as string) ?? null, name: this.form.value.name as string, description: this.form.value.description ?? null,
      roles: []
    });
  }

  cancelClick(){
    this.cancel.emit(true);
  }
}

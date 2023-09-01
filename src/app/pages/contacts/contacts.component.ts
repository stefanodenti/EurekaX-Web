import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UikitModule } from 'src/app/uikit/uikit.module';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    UikitModule
  ]
})

export class ContactsComponent implements OnInit {
  email = "hello@email.com"
  constructor() { }

  ngOnInit(): void {
  }

}

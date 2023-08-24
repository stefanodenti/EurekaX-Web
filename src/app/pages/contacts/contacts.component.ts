import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class ContactsComponent implements OnInit {
  email = "hello@email.com"
  constructor() { }

  ngOnInit(): void {
  }

}

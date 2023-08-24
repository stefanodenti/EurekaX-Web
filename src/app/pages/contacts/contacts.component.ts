import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  email = "hello@email.com"
  constructor() { }

  ngOnInit(): void {
  }

}

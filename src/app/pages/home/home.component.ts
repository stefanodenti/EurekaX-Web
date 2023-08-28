import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UikitModule } from 'src/app/uikit/uikit.module';

@Component({
  selector: 'eurekax-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    UikitModule
  ]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

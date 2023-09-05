import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initDropdowns, initFlowbite } from 'flowbite';
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
  test = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleBTN(){
    this.test = !this.test;
    setTimeout(()=>{
      initDropdowns();

    }, 2000)
  }
}

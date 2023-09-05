import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'eurekax-user-logged-dropdown',
  templateUrl: './user-logged-dropdown.component.html',
  styleUrls: ['./user-logged-dropdown.component.scss']
})
export class UserLoggedDropdownComponent {
  constructor(public authService: AuthService){
    
  }
}

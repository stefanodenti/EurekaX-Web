import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
    console.log('ISLOGGED?', this.authService.userData);
  }

  register() {
    this.authService.SignUp(this.email, this.password).then((res) => {
      console.log('LOGGED', this.authService.userData);
    }).catch((error) => {
      console.log(error);
    });
  }
}

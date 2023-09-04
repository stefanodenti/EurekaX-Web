import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  forgotPassword(value: string) {
    this.authService.ForgotPassword(value).then((res) => {
      console.log('EMAIL SEND FORGOT', res);
    }).catch((error) => {
      console.log(error);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user: any;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    console.log('ISLOGGED?', this.authService.userData);
    this.user = this.authService.userData;
    console.log('USER', this.user);
  }

  verifyEmail() {
    this.authService.SendVerificationMail().then((res) => {
      console.log('LOGGED', this.authService.userData);
    }).catch((error) => {
      console.log(error);
    });
  }

  logout() {
    this.authService.SignOut().then((res) => {
      console.log('LOGGED', this.authService.userData);
    }).catch((error) => {
      console.log(error);
    });
  }
}

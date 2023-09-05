import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private af: AngularFireAuth, public router: Router, private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    return this.af.authState.pipe(
      take(1),
      map((user: any) => {
        console.warn('[GUARD] CHANGE AUTHSTATE', user);
        if (user != null) {
          this.authService.SetUserData(user);
          return true;
        }
        else {
          this.router.navigate(['/auth/sign-in']);
          return false;
        }
      }));
  }
}

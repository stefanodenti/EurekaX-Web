import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { take } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userData: any; // Save logged in user data
    constructor(
        public afs: AngularFirestore, // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone, // NgZone service to remove outside scope warning
    ) {
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe((user) => {
            console.warn('[SERVICE] CHANGE AUTHSTATE', user);
            if (user) {
                this.SetUserData(user);
            } else {
                console.warn('LOGOUT', user);
                localStorage.setItem('user', 'null');
            }
        });
    }

    // Sign in with Google
    async LoginWithGoogle() {
        return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
            this.afAuth.authState.subscribe((user) => {
                if (user) {
                    this.router.navigate(['/']);
                }
            });
        }).catch((error) => {
            window.alert(error.message);
        });
    }

    // Sign in with email/password
    SignIn(email: string, password: string) {
        return this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.afAuth.authState.subscribe((user) => {
                    if (user) {
                        this.router.navigate(['/']);
                    }
                });
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    // Sign up with email/password
    SignUp(email: string, password: string) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.SendVerificationMail();
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }

    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verify-email-address']);
            });
    }

    // Reset Forggot password
    ForgotPassword(passwordResetEmail: string) {
        return this.afAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email sent, check your inbox.');
            })
            .catch((error) => {
                window.alert(error);
            });
    }

    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
        return this.userData && this.userData?.emailVerified !== false;
    }

    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`,
        );
        const userData: Partial<User> = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };
        userRef.set(userData, {
            merge: true,
        }).then(() => {
            this.afs.collection('users').doc(user.uid).get().pipe(take(1)).subscribe({
                next: (user) => {
                    if (user.data()) {
                        this.userData = user.data();
                        console.warn('SetUserData', this.userData)
                        localStorage.setItem('user', JSON.stringify(this.userData));
                    }
                },
                error: (err) => {
                    console.warn(err);
                },
            });
        });
    }

    // Sign out
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['/auth/sign-in']);
        });
    }

    updateUserData(param: Partial<User>) {
        this.userData = { ...this.userData, ...param };
        console.warn('updateUserData', this.userData)
        localStorage.setItem('user', JSON.stringify(this.userData));
    }
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  isAdmin: boolean;
  bookmarks: string[];
  metadata: {
    createdAt: number;
    creationTime: string;
    lastLoginAt: number;
    lastSignInTime: string;
  };
  isOnline: boolean;
}
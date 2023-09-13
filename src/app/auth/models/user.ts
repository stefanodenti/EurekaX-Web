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
  userType: UserType;
}

export interface UserType {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  roles: Role[];
}
export interface Role{
  id: string;
  code: string;
  name: string;
  description: string | null;
  actions: Action[];
}

export interface Action {
  id: string;
  code: string;
  name: string;
  description: string | null;
}

import firebase from "firebase/app";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type FirebaseAuthContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: "firebase";
  signIn: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

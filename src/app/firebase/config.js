import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import process from "process";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const FirebaseAuth = getAuth();

// export const SignUp = async (email, password) => {
//   await createUserWithEmailAndPassword(FirebaseAuth, email, password);
// };

// export const SignIn = async (email, password) => {
//   await signInWithEmailAndPassword(FirebaseAuth, email, password);
// };

// export const SignOut = async (email, password) => {
//   await signOut(FirebaseAuth);
// };

export { app, FirebaseAuth };

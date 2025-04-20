import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Google provider (can be reused)
const provider = new GoogleAuthProvider();

//Register
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//Google Sign-In
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

//Logout
export const logoutUser = () => {
  return signOut(auth);
};

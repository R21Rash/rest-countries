// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaDad4Ytd-UcPNwjVq3pc4OKI_umL2MLw",
  authDomain: "rest-countries-ac0e7.firebaseapp.com",
  projectId: "rest-countries-ac0e7",
  storageBucket: "rest-countries-ac0e7.appspot.com",
  messagingSenderId: "444516962719",
  appId: "1:444516962719:web:73716d5388b4ec3a376daa",
  measurementId: "G-864KLZ8EZ9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// (Optional) If you ever need analytics:
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

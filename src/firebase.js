import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const process = { env: import.meta }; // https://github.com/vitejs/vite/issues/1973#issuecomment-777253019

const Firebase = firebase.initializeApp({
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementI: process.env.VITE_FIREBASE_MEASUREMENTID,
});

export const auth = Firebase.auth();

export default Firebase;

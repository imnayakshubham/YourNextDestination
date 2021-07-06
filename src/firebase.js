import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});
export const auth = app.auth();
export default auth;
const db = app.firestore();

export { db };

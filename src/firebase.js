import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAqYV_Ych5B1rIXeG6qbzAsmssGMMc6ISE",
  authDomain: "suggestmeplaces-4deac.firebaseapp.com",
  projectId: "suggestmeplaces-4deac",
  storageBucket: "process.env.STORAGR_BUCKET",
  messagingSenderId: "suggestmeplaces-4deac.appspot.com",
  appId: "1:849037283225:web:a4a2b8f54cefc4d3d20d08",
});
export const auth = app.auth();
export default auth;
const db = app.firestore();

export { db };

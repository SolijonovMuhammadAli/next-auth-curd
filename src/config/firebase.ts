import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJbhGHlvVqWih9iXXKGTOG1zGVoOymYZ4",
  authDomain: "next-auth-curd.firebaseapp.com",
  projectId: "next-auth-curd",
  storageBucket: "next-auth-curd.appspot.com",
  messagingSenderId: "205535651773",
  appId: "1:205535651773:web:5c0c9a1335d0a9f3bad4d4",
  measurementId: "G-GJ65VGYTDD",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6KI_ElRbhkTZk6kqxmI-jClvB0brHphg",
  authDomain: "prepwise-95fa8.firebaseapp.com",
  projectId: "prepwise-95fa8",
  storageBucket: "prepwise-95fa8.firebasestorage.app",
  messagingSenderId: "353018510176",
  appId: "1:353018510176:web:13a8617508b24c5a477c05",
  measurementId: "G-DM7Q7VLWSS",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

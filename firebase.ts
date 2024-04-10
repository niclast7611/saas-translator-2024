import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDGczx3k0K2UtLTBdpkzx3boItkUQF0xIw",
  authDomain: "saas-translator-2024.firebaseapp.com",
  projectId: "saas-translator-2024",
  storageBucket: "saas-translator-2024.appspot.com",
  messagingSenderId: "152138637442",
  appId: "1:152138637442:web:f6622b11e639975fe3549b"
};
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const functions = getFunctions(app)

    export { auth, db, functions }
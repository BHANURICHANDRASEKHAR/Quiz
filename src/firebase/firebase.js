import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Y3g7WYpNtUmOTMFc4Qym4g0F772Srwc",
  authDomain: "quiz-app-d25cf.firebaseapp.com",
  databaseURL: "https://quiz-app-d25cf-default-rtdb.firebaseio.com",
  projectId: "quiz-app-d25cf",
  storageBucket: "quiz-app-d25cf.appspot.com",
  messagingSenderId: "776627829828",
  appId: "1:776627829828:web:81a537a08890425fca1011",
  measurementId: "G-VKJBM7NVQL"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const googleauthprovider=new GoogleAuthProvider();
export default app;
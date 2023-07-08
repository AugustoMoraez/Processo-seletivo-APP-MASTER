import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyCDiupwOSkHYkph0AQV_N9UVf6V2MKkgJ0",
  authDomain: "gamedevauth.firebaseapp.com",
  projectId: "gamedevauth",
  storageBucket: "gamedevauth.appspot.com",
  messagingSenderId: "578533755604",
  appId: "1:578533755604:web:d97181bbab68f7b4764941",
  measurementId: "G-CX441MCH7B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
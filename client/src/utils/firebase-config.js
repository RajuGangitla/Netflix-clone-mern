import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyARiTZW9Dfj8pM25pFIPZQg7wYHJJrXBDY",
  authDomain: "react-netflix-clone-ad1fb.firebaseapp.com",
  projectId: "react-netflix-clone-ad1fb",
  storageBucket: "react-netflix-clone-ad1fb.appspot.com",
  messagingSenderId: "365201487698",
  appId: "1:365201487698:web:bb445c9d7347ea897a6c8b",
  measurementId: "G-87QLKZXCDH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

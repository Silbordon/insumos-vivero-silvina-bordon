import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlA3Z8hvrp2StsmPeHe9SGdLZGIVuIV0",
  authDomain: "coder-viveromeme.firebaseapp.com",
  projectId: "coder-viveromeme",
  storageBucket: "coder-viveromeme.appspot.com",
  messagingSenderId: "64143729646",
  appId: "1:64143729646:web:68ee9fe9f95e0cf33de4ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpf_PNf2cNwxLx1accSLIsQYCZXtWl1_k",
  authDomain: "argentina-47b55.firebaseapp.com",
  projectId: "argentina-47b55",
  storageBucket: "argentina-47b55.appspot.com",
  messagingSenderId: "450360569477",
  appId: "1:450360569477:web:ffd7637a8fa270f73d43ec",
  measurementId: "G-ZGK9XMSBKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app
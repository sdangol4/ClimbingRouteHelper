import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOnpsVrSjSvzpS5kQ19vlb4V8u-R1i1Zs",
  authDomain: "king-climbing-route.firebaseapp.com",
  projectId: "king-climbing-route",
  storageBucket: "king-climbing-route.firebasestorage.app",
  messagingSenderId: "698117867084",
  appId: "1:698117867084:web:f9deb2ef63e15bc0a156e9",
  measurementId: "G-X6FJK4K2Q9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
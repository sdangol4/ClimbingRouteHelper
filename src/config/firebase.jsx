import { initializeApp } from "firebase/app";
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
const analytics = getAnalytics(app);
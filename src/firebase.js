import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
// Replace these values with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyB44vjWW48HsN99RpD6w9wQix9nhxvU2so",
  authDomain: "portfolio-tharindu.firebaseapp.com",
  projectId: "portfolio-tharindu",
  storageBucket: "portfolio-tharindu.firebasestorage.app",
  messagingSenderId: "34317918340",
  appId: "1:34317918340:web:dcfb27ee41e80de0bc22d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

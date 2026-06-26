// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPbGKJ8NQnW_dxVUQYRGlU21f7b7UN6XU",
  authDomain: "repo-intel.firebaseapp.com",
  projectId: "repo-intel",
  storageBucket: "repo-intel.firebasestorage.app",
  messagingSenderId: "1000303985452",
  appId: "1:1000303985452:web:26c0f4919a92f15c23e289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
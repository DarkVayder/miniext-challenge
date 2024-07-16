// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABBZnB8rcoQjbSZkK0UfCMkWsGbv-k9_0",
    authDomain: "signup-testing-fd8bd.firebaseapp.com",
    projectId: "signup-testing-fd8bd",
    storageBucket: "signup-testing-fd8bd.appspot.com",
    messagingSenderId: "360656321479",
    appId: "1:360656321479:web:004fb02911893c6587f7e2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, GoogleAuthProvider, RecaptchaVerifier };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
}

export const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
}

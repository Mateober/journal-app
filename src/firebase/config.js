// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBjLfS7jEe0htzA-XNBj-E9DusABDAWuZw',
    authDomain: 'react-cursos-70e55.firebaseapp.com',
    projectId: 'react-cursos-70e55',
    storageBucket: 'react-cursos-70e55.appspot.com',
    messagingSenderId: '383912329548',
    appId: '1:383912329548:web:4c8513ed6e446ef2e9cfe9',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

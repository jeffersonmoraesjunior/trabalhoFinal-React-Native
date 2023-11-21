// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyB3Zfg53whEl7r6jx0L_5jiWq2wutyyjas',
   authDomain: 'menu-chef-932c1.firebaseapp.com',
   projectId: 'menu-chef-932c1',
   storageBucket: 'menu-chef-932c1.appspot.com',
   messagingSenderId: '856415831881',
   appId: '1:856415831881:web:36ee8f84669c404be23c98'
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);

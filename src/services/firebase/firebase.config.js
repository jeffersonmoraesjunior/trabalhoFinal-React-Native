// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

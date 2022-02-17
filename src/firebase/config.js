/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDF7e-ahYS0ZdW-I0ZYDszrx9yBlGnSX0g',
  authDomain: 'social-network-turisti-k.firebaseapp.com',
  databaseURL: 'https://social-network-turisti-k-default-rtdb.firebaseio.com',
  projectId: 'social-network-turisti-k',
  storageBucket: 'social-network-turisti-k.appspot.com',
  messagingSenderId: '179845835723',
  appId: '1:179845835723:web:b70c18bbb46ebca6a1e44e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportación de funciones auth
export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};

/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

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
const db = getFirestore(app);

// Exportación de funciones auth
export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};

// Exportación de funciones firestore
export {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
};

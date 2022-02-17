import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from './config.js';

// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Observador de estado de autenticación
const estadoAutenticaciónUsuario = (callback) => onAuthStateChanged(auth, callback);

// Acceso de usuarios existentes
const inicioSesionUsuario = (email, password) => signInWithEmailAndPassword(auth, email, password);

export {
  estadoAutenticaciónUsuario,
  inicioSesionUsuario,
  createUser
};

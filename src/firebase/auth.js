import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from './config.js';

// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Observador de estado de autenticación
const estadoAutenticaciónUsuario = (callback) => onAuthStateChanged(auth, callback);

// Acceso de usuarios existentes
const inicioSesionUsuario = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Cerrar Sesión
const cerrarSesionUsuario = () => signOut(auth);

export {
  estadoAutenticaciónUsuario,
  inicioSesionUsuario,
  createUser,
  cerrarSesionUsuario,
};

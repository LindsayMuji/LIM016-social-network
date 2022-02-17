import {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from './config.js';

// Observador de estado de autenticación
const estadoAutenticaciónUsuario = (callback) => onAuthStateChanged(auth, callback);

// Acceso de usuarios existentes
const inicioSesionUsuario = (email, password) => signInWithEmailAndPassword(auth, email, password);

export {
  estadoAutenticaciónUsuario,
  inicioSesionUsuario,
};

/* eslint-disable no-unused-vars */
// importamos la funcion que vamos a testear
import {
  estadoAutenticaciónUsuario,
  inicioSesionUsuario,
  createUser,
  cerrarSesionUsuario,
} from '../src/firebase/auth';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '../src/firebase/config';

// Realizamos el mock de las funciones de firebase
jest.mock('../src/firebase/config');

// Test de función createUser
describe('Función createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => createUser('juanita23@gmail.com', '12355687').then(() => {
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('juanita23@gmail.com');
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('12355687');
  }));
});

// Test de inicioSesionUsuario
describe('probar la función loginUser', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof inicioSesionUsuario).toBe('function');
  });
  it('Debería permitir que el usuario entre a la app', () => {
    inicioSesionUsuario('juanita23@gmail.com', '12355687').then(() => {
      expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('juanita23@gmail.com');
      expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('12355687');
    });
  });
});

// Test de cerrarSesionUsuario
describe('probar la función signOut', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof cerrarSesionUsuario).toBe('function');
  });
  it('Debería salir de sesión', (done) => {
    cerrarSesionUsuario().then(() => {
      expect(signOut.mock.calls[0][1]).toBe(undefined);
    });
    done();
  });
});

// Test de estadoAutenticaciónUsuario
describe('probar la función userStateChange', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof estadoAutenticaciónUsuario).toBe('function');
  });
  it('Debería permitir obtener los datos del usuario', () => {
    const user = () => {};
    estadoAutenticaciónUsuario(user).then(() => {
      expect(onAuthStateChanged.mock.calls[0][1]).toBe(user);
    });
  });
});

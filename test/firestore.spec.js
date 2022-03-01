/* eslint-disable no-unused-vars */
// importamos la funcion que vamos a testear
import {
  share,
  /* onGetShare,
  deleteShare, */
  getOneShare,
  updateShare,
} from '../src/firebase/firestore';

import {
  collection,
  addDoc,
} from '../src/firebase/config';

// Realizamos el mock de las funciones de firebase
jest.mock('../src/firebase/config');

// Test de función share
describe('Función share', () => {
  it('debería ser una función', () => {
    expect(typeof share).toBe('function');
  });

  describe('función share', () => {
    it('Debería guardar una publicación', () => {
      const result = share('Hola mundo');
      expect(result).toStrictEqual({
        description: 'Hola mundo',
      });
    });
  });
});

// Test de función updateShare
describe('Función updateShare', () => {
  it('debería ser una función', () => {
    expect(typeof updateShare).toBe('function');
  });

  describe('función updateShare', () => {
    it('Deberia retornar una descripción para editar', async () => {
      const result = await updateShare('00000001', { description: 'Hola cómo estas' });
      expect(result).toStrictEqual({
        description: 'Hola cómo estas',
      });
    });
  });
});

// Test de función getOneShare
describe('Función getOneShare', () => {
  it('debería ser una función', () => {
    expect(typeof getOneShare).toBe('function');
  });

  describe('Función getOneShare', () => {
    it('Deberia obtener id de post a editar', async () => {
      const Publish = {
        description: 'social network',
        idUser: '0001',
      };
      const result = await getOneShare('0001');
      expect(result).toStrictEqual(Publish.idUser);
    });
  });
});

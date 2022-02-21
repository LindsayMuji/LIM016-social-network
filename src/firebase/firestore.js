import {
  db,
  collection,
  addDoc,
  getDocs,
} from './config.js';

// función para guardar post

export const share = (description) => addDoc(collection(db, 'post'), { description });
export const getShare = () => getDocs(collection(db, 'post'));

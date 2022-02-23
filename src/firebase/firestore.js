import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
} from './config.js';

// función para guardar post

export const share = (description) => addDoc(collection(db, 'post'), { description });
export const getShare = () => getDocs(collection(db, 'post'));
export const onGetShare = (callback) => onSnapshot(collection(db, 'post'), callback);
export const deleteShare = (id) => deleteDoc(doc(db, 'post', id));

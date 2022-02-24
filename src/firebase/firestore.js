import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from './config.js';

// función para guardar post

export const share = (description) => addDoc(collection(db, 'post'), { description });
export const getShare = () => getDocs(collection(db, 'post'));
export const onGetShare = (callback) => onSnapshot(collection(db, 'post'), callback);
export const deleteShare = (id) => deleteDoc(doc(db, 'post', id));
export const getOneShare = (id) => getDoc(doc(db, 'post', id));
export const updateShare = (id, newObjPost) => updateDoc(doc(db, 'post', id), newObjPost);

// Mock de auth
export const auth = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
export const onAuthStateChanged = jest.fn(() => Promise.resolve({}));
export const signOut = jest.fn(() => Promise.resolve({}));

// Mock de firestore
export const db = {};
export const collection = jest.fn();
export const addDoc = jest.fn((document, data) => (data));
export const doc = jest.fn(() => Promise.resolve({}));
export const updateDoc = jest.fn((documents, values) => Promise.resolve(values));
export const getDoc = jest.fn(() => Promise.resolve('0001'));

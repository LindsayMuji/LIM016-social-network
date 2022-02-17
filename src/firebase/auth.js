import {
  auth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // sendEmailVerification,
} from './config.js';

// SIGN-UP
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// SIGN-IN
// const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
// SEND MESSSAGE OF VERIFICATION TO EMAIL
// const emailVerification = () => sendEmailVerification(auth.currentUser);
export {
  createUser,
  // loginUser,
  // emailVerification,
};

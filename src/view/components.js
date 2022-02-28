import { logIn, userState } from './home.js';
import { signUp } from './singUp.js';
import { newPost } from './muro.js';
import Different from './error.js';

export const components = {
  LogIn: logIn,
  UserState: userState,
  SignUp: signUp,
  NewPost: newPost,
  different: Different,
};

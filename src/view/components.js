import { logIn } from './home.js';
import { signUp } from './singUp.js';
import { newPost } from './muro.js';
import Different from './error.js';

export const components = {
  Login: logIn,
  SignUp: signUp,
  NewPost: newPost,
  different: Different,
};

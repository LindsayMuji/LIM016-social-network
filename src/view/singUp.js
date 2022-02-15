/* eslint-disable no-unused-vars */
/* import {
  createUserWithEmailAndPassword, set, ref, database, auth,
} from '../lib/config.js';
import { createUser, emailVerification } from */

export const signUp = () => {
  const viewSignUp = `
    <div class="containerImagen-singup">
      <img class='imgSingup' src='../Images/fotoRegistrarme.jpg'>
    </div>
    <div class="containerForm">
      <h2 class='tituloLogin'>TURISTI - K</h2>
      <form class='formSignUp' id='formSignUp'>
        <h2 class = 'tituloSignUp'>Regístrate</h2>    
        <div class='divUserSignUp' id= 'inputBox'>
          <span class= 'iconUser'><i class="fas fa-user"></i></span>
          <input type='text' placeholder='Ingrese su usuario' id ='userSignUp' class='userSignUp'required>
        </div>
        <div class='divEmailSignUp' id= 'inputBox'>
          <span class='iconEmail'><i class="fas fa-envelope"></i></span>
          <input type='text' placeholder='Ingrese su correo electrónico' id ='emailSignUp' class='emailSignUp' required>
        </div>
        <div class="eye" id= 'inputBox'>
          <span class='iconEye'><i class="fas fa-eye-slash"></i></span>
          <input type='password' placeholder='Ingrese su contraseña' id='passSignUp' class='passSignUp'required>
        </div>
        <p id="signUpErrors" class="signUpErrors"></p>
        <input type='submit' value='Registrarme' id='signUp' class= 'btnSignUp' >
      </form>
    </div>
    `;
  // creando estructura html
  document.body.style.background = '#FCFCFC';
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentSignUp');
  divElement.setAttribute('class', 'contentSignUp');
  divElement.innerHTML = viewSignUp;
  return divElement;
};
/*
// Función que trae errores al registrarse
const errorsOccured = (typeError) => {
  const userSignUp = document.querySelector('#userSignUp');
  const emailSignUp = document.querySelector('#emailSignUp');
  const pass = document.querySelector('#passSignUp');
  const signUpErrors = document.getElementById('signUpErrors');
  switch (typeError.code) {
    case 'auth/weak-password':
      signUpErrors.innerHTML = 'La contraseña no es segura, debe contener al menos 6 caracteres.';
      break;
    case 'auth/invalid-password':
      signUpErrors.innerHTML = 'Password no es válido, deben ser caracteres válidos.';
      break;
    case 'auth/internal-error':
      signUpErrors.innerHTML = 'Error interno.';
      break;
    case 'auth/invalid-email':
      signUpErrors.innerHTML = 'El correo electrónico no es válido.';
      break;
    case 'auth/email-already-in-use':
      signUpErrors.innerHTML = 'Ya existe una cuenta con el correo electrónico proporcionado.';
      break;
    case 'auth/operation-not-allowed':
      signUpErrors.innerHTML = 'La cuenta de correo electrónico y contraseña no estan habilitadas.';
      break;
    default:
      signUpErrors.innerHTML = typeError;
      break;
  }
  if ((userSignUp.value === '') || (emailSignUp.value === '') || (pass.value === '')) {
    signUpErrors.innerHTML = 'Debes completar todos los campos';
  }
  return (signUpErrors.innerHTML);
};
// función que envía un mensaje de verificación
const sendEmailVerification = () => {
  emailVerification()
    .then(() => {
      console.log('Se ha enviado un mensaje de verificación al correo ');
    })
    .catch((error) => {
      console.log(error, 'Error envio de mensaje al correo electrónico.');
    });
};
const createUserwithFirebase = () => {
  // Declaración de variables
  const userRegister = document.querySelector('#formSignUp');
  const userSignUp = document.querySelector('#userSignUp');
  const emailSignUp = document.querySelector('#emailSignUp');
  const pass = document.querySelector('#passSignUp');
  let credencialUsuario;

  // Creando usuario con firebase
  createUser(emailSignUp.value, pass.value)
    .then((userCredential) => {
      credencialUsuario = userCredential.user;
      const uid = userCredential.user.uid;
      // Enviando correo de verificación
      sendEmailVerification();

      console.log('El usuario se creo correctamente', emailSignUp.value, ' y ', pass.value);

      // Guardando en las colecciones saveUsers y account
      saveUser(emailSignUp.value, pass.value, userSignUp.value, uid);
      userAccount(uid, userSignUp.value, credencialUsuario.displayName, emailSignUp.value,
        pass.value, credencialUsuario.phoneNumber, credencialUsuario.photoURL);

      // Limpia los campos
      userRegister.reset();

    })
    .catch((error) => {
      errorsOccured(error);
    });
}; */

/* signUp.addEventListener('click', (e) => {
  const usuario = document.getElementById('userSignUp').value;
  const email = document.getElementById('emailSignUp').value;
  const password = document.getElementById('passSignUp').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, `user/${user.uid}`), {
        username: usuario,
        Email: email,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}); */

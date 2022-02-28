/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import {
  estadoAutenticaciónUsuario,
  inicioSesionUsuario,
} from '../firebase/auth.js';

export const logIn = () => {
  const viewLogIn = `
    <div class="containerImagen-name">
      <img class='turistik' src='../Images/home.jpg'>
    </div>
    <div class="containerForm">
      <h2 class='tituloLogin'>TURISTI - K</h2>
      <form id='formLogin' class='formLogin'>
        <div class="email" id="inputBox">
          <span class='iconEmail'><i class="fas fa-envelope"></i></span>
          <input type='text' placeholder='Email' id='emailLogin' class='emailLogin' autocomplete="off">
        </div> 
        <div class="password-eye" id="inputBox">
          <span class='iconEye'><i class="fas fa-eye-slash"></i></span>
          <input type='password' placeholder='Password' id='pass' class='passLogin' required>
        </div> 
        <button type='submit' class='save' id='inputBox'>Log In</button>
        <div class='loginWhit' id="inputBox">
          <p class="texto"> or log in with:</p>
        </div>
        <div class='iconos_sesion' id="inputBox">
          <img src='Images/facebook.png' id='btn-facebook' class= 'btn-facebook'>  
          <img src='Images/google.png' id="btn-google" class="btn-google"> 
        </div>
        <div class='registrese' id="inputBox">
          <p class="acountP">Don't you have an account? <a href="#/signUp"> Sign Up here</a></p>
        </div>
      </form>
    </div>`;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentLogin');
  divElement.classList.add('contentLogin');
  divElement.innerHTML = viewLogIn;
  const botonSubmit = divElement.querySelector('.save');
  botonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const password = divElement.querySelector('#pass').value;
    const email = divElement.querySelector('#emailLogin').value;
    inicioSesionUsuario(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.hash = '#/muro';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  return divElement;
};

export const userState = () => {
  estadoAutenticaciónUsuario((user) => {
    if (user === null || user === undefined) {
      window.location.hash = '#/home';
    }
  });
};

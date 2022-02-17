/* eslint-disable no-unused-vars */
import { createUser } from '../firebase/auth.js';

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

  const btnSignUp = divElement.querySelector('#formSignUp');
  btnSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = divElement.querySelector('#userSignUp').value;
    const email = divElement.querySelector('#emailSignUp').value;
    const pass = divElement.querySelector('#passSignUp').value;
    createUser(email, pass)
      .then((userCredential) => {
        // eslint-disable-next-line no-shadow
        const user = userCredential.user;
        window.location.hash = '#/home';
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
  return divElement;
};

export const signUp = () => {
  const viewSignUp = `
      <form class='formSignUp' id='formSignUp'>
        <h2 class = 'tituloSignUp'>Regístrate</h2>    
        <div class='divUserSignUp'>
          <span class= 'iconUser'><i class="fas fa-user"></i></span>
          <input type='text' placeholder='Ingrese su usuario' id ='userSignUp' class='userSignUp'>
        </div>
        <div class='divEmailSignUp'>
          <span class='iconEmail'><i class="fas fa-envelope"></i></span>
          <input type='text' placeholder='Ingrese su correo electrónico' id ='emailSignUp' class='emailSignUp'>
        </div>
        <div class="eye">
          <span class='iconEye'><i class="fas fa-eye-slash"></i></span>
          <input type='password' placeholder='Ingrese su contraseña' id='passSignUp' class='passSignUp'>
        </div>
        <p id="signUpErrors" class="signUpErrors"></p>
        <input type='submit' value='Registrarme' id='signUp' class= 'btnSignUp' >
        <img src='Images/fotoRegistrarme.jpg' id="fotoInka" class="fotoInka">
      </form>
    `;
    // creando estructura html
  document.body.style.background = '#FCFCFC';
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentSignUp');
  divElement.setAttribute('class', 'contentSignUp');
  divElement.innerHTML = viewSignUp;
  return divElement;
};

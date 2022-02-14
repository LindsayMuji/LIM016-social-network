export const logIn = () => {
  const viewLogIn = `
    <form id='formLogin' class='formLogin'>
    <img class='turistik' src='../Images/home.jpg'>
    <h2 class='tituloLogin'>TURISTI - K</h2>
      <div class="containerSignIn"> 
        <input type='text' placeholder='Ingrese su correo electrónico' id='emailLogin' class='emailLogin'>
        <div class="eye">
          <span class='iconEye'><i class="fas fa-eye-slash"></i></span>
          <input type='password' placeholder='Ingrese su contraseña' id='pass' class='passLogin'>
        </div>
        <a class='forgetpass' id='forgetpass' href='#/'>¿Has olvidado tu contraseña?</a>  
        <input type='submit' value='LogIn' id='save' class='save'>
        <p id="textVerified"></p>
        <div class='iconos_sesion'>
          <img src='Images/google.png' id="btn-google" class="btn-google">
          <img src='Images/facebook.png' id='btn-facebook' class= 'btn-facebook'>  
        </div>
        <p class="acountP">¿No tienes cuenta? <a href="#/signUp"> Regístrate aquí</a></p>
      </div>
    </form> `;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentLogin');
  divElement.setAttribute('class', 'contentLogin');
  divElement.innerHTML = viewLogIn;
  /* const emailLogin = divElement.querySelector('#emailLogin');
  const pass = divElement.querySelector('#pass');
  const iconEye = divElement.querySelector('.iconEye');
  const icon = divElement.querySelector('i'); */

  return divElement;
};

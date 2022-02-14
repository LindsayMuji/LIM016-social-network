export const logIn = () => {
  const viewLogIn = `
    <div class="containerImagen-name">
      <img class='turistik' src='../Images/home.jpg'>
    </div>
    <div class="containerForm">
      <h2 class='tituloLogin'>TURISTI - K</h2>
      <form id='formLogin' class='formLogin'>
        <div class="email" id="inputBox">
          <input type='text' placeholder='Ingrese su correo electrónico' id='emailLogin' class='emailLogin'>
        </div> 
        <div class="password-eye" id="inputBox">
          <input type='password' placeholder='Ingrese su contraseña' id='pass' class='passLogin' required>
          <span class='iconEye'><i class="fas fa-eye-slash"></i></span>
        </div> 
        <button type='submit' class='save' id="inputBox">LogIn</button>
        <div class='loginWhit' id="inputBox">
          <p class="texto">O bien ingresa con:</p>
        </div>
        <div class='iconos_sesion' id="inputBox">
          <img src='Images/facebook.png' id='btn-facebook' class= 'btn-facebook'>  
          <img src='Images/google.png' id="btn-google" class="btn-google"> 
        </div>
        <div class='registrese' id="inputBox">
          <p class="acountP">¿No tienes cuenta? <a href="#/signUp"> Regístrate aquí</a></p>
        </div>
      </form>
    </div>`;

  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentLogin');
  divElement.classList.add('contentLogin');
  divElement.innerHTML = viewLogIn;

  /* const emailLogin = divElement.querySelector('#emailLogin');
  const pass = divElement.querySelector('#pass');
  const iconEye = divElement.querySelector('.iconEye');
  const icon = divElement.querySelector('i'); */

  return divElement;
};

import { components } from '../view/components.js';

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('container');
  // para que no agregue nada porque solo quiero que cambie

  mainContainer.innerHTML = ' ';

  switch (route) {
    case '': case '#/': case '#/home':
      mainContainer.appendChild(components.Login());
      break;

    /* case '#/profileRegister': {
      mainContainer.appendChild(components.Registro());
      break;
    }
    case '#/profile': {
      mainContainer.appendChild(components.Profile());
      break;
    } */
    case '#/signUp': {
      mainContainer.appendChild(components.SignUp());
      break;
    }
    default:
      mainContainer.appendChild(components.different());
      break;
  }
};
export { changeView };

import { components } from '../view/components.js';

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('container');
  // para que no agregue nada porque solo quiero que cambie

  mainContainer.innerHTML = ' ';
  switch (route) {
    case '': case '#/': case '#/home':
      mainContainer.appendChild(components.LogIn());
      break;
    case '#/signUp': {
      mainContainer.appendChild(components.SignUp());
      break;
    }
    case '#/muro': {
      components.UserState();
      mainContainer.appendChild(components.NewPost());
      break;
    }
    default:
      mainContainer.appendChild(components.different());
      break;
  }
};
export { changeView };

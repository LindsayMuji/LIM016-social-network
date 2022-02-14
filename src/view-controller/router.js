import { components } from '../view/components.js';

const changeView = (route) => {
  // vamos a asociar el nombre de la ruta con el componente
  const mainContainer = document.getElementById('container');
  // para que no agregue nada porque solo quiero que cambie

  mainContainer.innerHTML = ' ';

  // eslint-disable-next-line default-case
  switch (route) {
    case '#/home':
      mainContainer.appendChild(components.Login());
      break;
  }
};
export { changeView };

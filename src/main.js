// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controller/router.js';

const init = () => {
  // para que no solo se muestre la vista cuando cambia sino tambien cuando se recarga
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

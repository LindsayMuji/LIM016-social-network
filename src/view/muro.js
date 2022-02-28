/* eslint-disable no-alert */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import {
  share,
  // getShare,
  onGetShare,
  deleteShare,
  getOneShare,
  updateShare,
} from '../firebase/firestore.js';

import {
  viewHeader,
} from './header.js';

import {
  cerrarSesionUsuario,
} from '../firebase/auth.js';

export const newPost = () => {
  const viewNews = `
  <div class = 'seccionPost'>
    <form id="formPost" class="formPost">
        <textarea class="postDescription" id="postDescription" rows="5" placeholder="Do you Want| to share something?"></textarea>
        <div class = "section-button">
        <button class="btnPostSave" id="btnPostSave"><h5>Share</h5></button>
        </div>
    </form>
    <section class="postContainer" id="postContainer"></section>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentMuro');
  divElement.setAttribute('class', 'contentMuro');
  divElement.innerHTML = viewHeader + viewNews;
  const postContainer = divElement.querySelector('#postContainer');
  const formPost = divElement.querySelector('#formPost');
  let editStatus = false;
  let id = '';

  // Actualización en tiempo real
  onGetShare((querySnapshot) => {
    let htmlPost = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      htmlPost += `
        <div class= 'publicacion'>
            <div class = 'box-post'>
                <h3 class = 'post' id = 'post'>${dataPost.description}</h3>
            </div>
            <div class = 'btn-Delete-Edit' id = 'btn-Delete-Edit'>
                <button class="btn-delete" data-id="${doc.id}">Delete</button>
                <button class="btn-edit" data-id="${doc.id}">Edit</button>
            </div>
        </div>
        `;
    });
    postContainer.innerHTML = htmlPost;
    const btnDelete = postContainer.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        deleteShare(e.target.dataset.id);
      });
    });
    const btnEdit = postContainer.querySelectorAll('.btn-edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const docId = await getOneShare(e.target.dataset.id);
        const docPost = docId.data();
        const newLocal = formPost.postDescription;
        newLocal.value = docPost.description;
        editStatus = true;
        id = docId.id;
        formPost.btnPostSave.innerText = 'Update';
      });
    });
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    formPost.btnPostSave.innerText = 'Share';
    const post = divElement.querySelector('#postDescription').value;
    if (post === '') {
      alert('share something with us!');
    } else if (!editStatus) {
      share(post);
    } else {
      updateShare(id,
        {
          description: post,
        });
      editStatus = false;
    }

    formPost.reset();
  });

  const cerrarSesion = divElement.querySelector('#logOut');
  cerrarSesion.addEventListener('click', () => {
    cerrarSesionUsuario()
      .then(() => {
        window.location.hash = '#/home';
      })
      .catch((error) => (error));
  });

  return divElement;
};

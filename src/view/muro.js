/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import {
  share,
  getShare,
  onGetShare,
  deleteShare,
} from '../firebase/firestore.js';

let postContainer;
export const newPost = () => {
  const viewNews = `
  <form id="formPost" class="formPost">
    <textarea class="postDescription" id="postDescription" rows="5" placeholder="¿Quieres compartir algo?"></textarea>
    <div class = "section-button">
    <button class="btnPostSave" id="btnPostSave"><h5>Share</h5></button>
    </div>
  </form>
  <section class="postContainer" id="postContainer"></section>
  `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'contentMuro');
  divElement.setAttribute('class', 'contentMuro');
  divElement.innerHTML = viewNews;
  postContainer = divElement.querySelector('#postContainer');

  const formPost = divElement.querySelector('#formPost');

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const post = divElement.querySelector('#postDescription').value;
    share(post);
    formPost.reset();
  });
  return divElement;
};

window.addEventListener('DOMContentLoaded', async () => {
  // const querySnapshot = await getShare();

  onGetShare((querySnapshot) => {
    let htmlPost = '';
    querySnapshot.forEach((doc) => {
      const dataPost = doc.data();
      htmlPost += `
        <div class="formPost">
            <h3>${dataPost.description}</h3>
            <button class="btn-delete">Delete</button>
        </div>
        `;
    });
    postContainer.innerHTML = htmlPost;
    const btnDelete = postContainer.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteShare(dataset.id);
      });
    });
  });
});

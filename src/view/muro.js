/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import {
  share,
  getShare,
  onGetShare,
  deleteShare,
  getOneShare,
  updateShare,
} from '../firebase/firestore.js';

export const newPost = () => {
  const viewNews = `
  <form id="formPost" class="formPost">
    <textarea class="postDescription" id="postDescription" rows="5" placeholder="Do you Wanto to share something?"></textarea>
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
          <div class="formPost">
              <h3>${dataPost.description}</h3>
              <button class="btn-delete" data-id="${doc.id}">Delete</button>
              <button class="btn-edit" data-id="${doc.id}">Edit</button>
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
    if (!editStatus) {
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
  return divElement;
};

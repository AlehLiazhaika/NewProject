/* global ConvertorService */

function recolorLike(event) {
  const like = event.target;
  like.classList.toggle('liked');
}

function showShare(event) {
  const shareBttn = event.target;
  shareBttn.classList.toggle('shared');
  shareBttn.parentNode.parentNode.lastElementChild.classList.toggle('sharePanelOn');
}

function commentFunc(event) {
  const text = event.target.value;
  if (event.keyCode === 13 && text !== '') {
    const comment = new Comment('noname', text);
    event.target.parentNode.parentNode.querySelector('.comments').appendChild(ConvertorService.toHTML(comment));
    event.target.value = ''; // eslint-disable-line no-param-reassign
  }
}


class FeedView {
  constructor(feedEl) {
    this._feedEl = feedEl;
  }

  get feedEl() {
    return this._feedEl;
  }

  add(photoPosts) {
    const container = document.createElement('div');
    photoPosts.forEach((element) => {
      container.insertBefore(ConvertorService.toHTML(element), container.children[0]);
    });
    this._feedEl.appendChild(container);
    Array.from(container.getElementsByClassName('like')).forEach((element) => {
      element.addEventListener('click', recolorLike);
    });
    Array.from(container.getElementsByClassName('share')).forEach((element) => {
      element.addEventListener('click', showShare);
    });
    Array.from(container.getElementsByClassName('addComment')).forEach((element) => {
      element.addEventListener('keydown', commentFunc);
    });
  }

  remove(id) {
    const element = this._feedEl.getElementById(id);
    element.parentNode.removeChild(element);
  }

  clear() {
    this._feedEl.innerHTML = '';
  }
}

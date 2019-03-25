/* global PhotoPostView, CommentView */

function recolorLike(event) {
  const like = event.target;
  like.classList.toggle('liked');
}


function commentFunc(event) {
  const text = event.target.value;
  if (event.keyCode === 13 && text !== '') {
    const comment = new Comment('noname', text);
    event.target.parentNode.parentNode.querySelector('.comments').appendChild(CommentView.getView(comment));
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

  add(photoPost) {
    this._feedEl.appendChild(PhotoPostView.getView(photoPost));
    document.getElementById(photoPost.id).querySelector('.like').addEventListener('click', recolorLike);
    document.getElementById(photoPost.id).querySelector('.addComment').addEventListener('keydown', commentFunc);
  }

  addAll(photoPosts) {
    const container = document.createElement('div');
    photoPosts.forEach((element) => {
      container.insertBefore(PhotoPostView.getView(element), container.children[0]);
    });
    this._feedEl.appendChild(container);
    Array.from(container.getElementsByClassName('like')).forEach((element) => {
      element.addEventListener('click', recolorLike);
    });
    Array.from(container.getElementsByClassName('addComment')).forEach((element) => {
      element.addEventListener('keydown', commentFunc);
    });
  }
}

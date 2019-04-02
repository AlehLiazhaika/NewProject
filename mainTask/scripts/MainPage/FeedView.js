/* global ConvertorService */

class FeedView {
  constructor(feedEl, recolorLike) {
    this._feedEl = feedEl;
    this._recolorLike = recolorLike;
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
      element.addEventListener('click', this.handleLike);
    });
    return container;
  }

  remove(id) {
    const element = this._feedEl.getElementById(id);
    element.parentNode.removeChild(element);
  }

  handleLike(event) {
    const postID = event.target.getAttribute('data-id');
    this._recolorLike(+postID);
  }

  clear() {
    this._feedEl.innerHTML = '';
  }
}

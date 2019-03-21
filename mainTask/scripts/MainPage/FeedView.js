/* global PhotoPostView */

class FeedView {
  constructor(feedEl) {
    this._feedEl = feedEl;
  }

  get feedEl() {
    return this._feedEl;
  }

  add(photoPostEl) {
    this._feedEl.appendChild(PhotoPostView.getView(photoPostEl));
  }

  addAll(photoPostEls) {
    const container = document.createElement('div');
    photoPostEls.forEach((element) => {
      container.insertBefore(PhotoPostView.getView(element), container.children[0]);
    });
    this._feedEl.appendChild(container);
  }
}

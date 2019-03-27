/* global FeedModel, FeedView */

class Feed {
  constructor(feedElement) {
    this._feedModel = new FeedModel();
    this._feedView = new FeedView(feedElement);
  }

  add(photoPosts) {
    this._feedModel.add(this._feedView.add(photoPosts));
  }

  remove(id) {
    if (this._feedLogic.remove(id)) {
      this._feedView.remove(id);
    }
  }

  clear() {
    this._feedLogic.clear();
    this._feedView.clear();
  }
}

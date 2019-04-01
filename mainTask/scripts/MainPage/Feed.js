/* global FeedModel, FeedView */

class Feed {
  constructor(feedElement) {
    this._feedModel = new FeedModel();
    this._feedView = new FeedView(feedElement);
  }

  add(photoPosts) {
    this._feedView.add(this._feedModel.add(photoPosts));
  }

  remove(id) {
    if (this._feedModel.remove(id)) {
      this._feedView.remove(id);
    }
  }

  clear() {
    this._feedModel.clear();
    this._feedView.clear();
  }
}

/* global FeedModel, FeedView, EventsService */


class Feed {
  constructor(feedElement) {
    this._feedModel = new FeedModel();
    this._feedView = new FeedView(this.like.bind(this),
      this.share.bind(this),
      this.addComment.bind(this));
  }

  add(photoPosts) {
    const elements = this._feedView.add(this._feedModel.add(photoPosts));
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

  like(postID) {
    this._feedModel.like(postID);
    this._feedView.like(postID);
  }

  share(postID) {
    this._feedModel.share(postID);
    this._feedView.share(postID);
  }

  addComment(postID, text) {
    this._feedModel.addComment(postID, text);
    this._feedView.addComment(postID);
  }
}

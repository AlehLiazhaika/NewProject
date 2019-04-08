/* global FeedModel, FeedView, EventsService */


class Feed {
  constructor() {
    this._model = new FeedModel();
    this._view = new FeedView(this.like.bind(this),
      this.share.bind(this),
      this.addComment.bind(this));
  }

  add(photoPosts) {
    const elements = this._view.add(this._model.add(photoPosts));
    if (JSON.parse(localStorage.getItem('posts')).length > this._model.length) {
      document.getElementById('loadMoreBttn').style.display = 'block';
    } else {
      document.getElementById('loadMoreBttn').style.display = 'none';
    }
  }

  remove(id) {
    if (this._model.remove(id)) {
      this._view.remove(id);
    }
  }

  clear() {
    this._model.clear();
    this._view.clear();
  }

  like(postID) {
    this._model.like(postID);
    this._view.like(postID);
  }

  share(postID) {
    this._model.share(postID);
    this._view.share(postID);
  }

  addComment(postID, text) {
    this._model.addComment(postID, text);
    this._view.addComment(postID);
  }
}

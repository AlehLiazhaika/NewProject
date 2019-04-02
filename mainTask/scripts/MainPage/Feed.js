/* global FeedModel, FeedView, EventsService */

function recolorLike(event) {
  const like = event.target;
  like.classList.toggle('liked');
}

class Feed {
  constructor(feedElement) {
    this._feedModel = new FeedModel();
    this._feedView = new FeedView(feedElement, this.recolorLike.bind(this));
  }

  recolorLike(postID) {
    const post = this._feedModel.posts.find(element => element.id === +postID);
    post.like(localStorage.getItem('me'));
    alert(`${postID} liked`);
  }

  add(photoPosts) {
    const elements = this._feedView.add(this._feedModel.add(photoPosts));
    EventsService.toPhotoPosts(elements);
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

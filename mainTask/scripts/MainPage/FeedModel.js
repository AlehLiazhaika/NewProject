/* global PhotoPost, DefaultFilter */

class FeedModel {
  constructor() {
    this._posts = [];
  }

  get posts() {
    return this._posts;
  }

  add(photoPosts) {
    const arr = [];
    photoPosts.forEach((element) => {
      if (PhotoPost.validate(element) && this._posts.every(post => post.id !== element.id)) {
        this._posts.push(element);
        arr.push(element);
      }
    });
    return arr;
  }

  remove(id) {
    const index = this._posts.map(element => element.id).indexOf(id);
    if (~index) {
      this._posts.splice(index, 1);
      return true;
    }
    return false;
  }

  clear() {
    this._posts = [];
  }
}

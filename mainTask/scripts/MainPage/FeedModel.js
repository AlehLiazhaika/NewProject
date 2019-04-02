/* global PhotoPost, DefaultFilter */

class FeedModel {
  constructor() {
    this._posts = [];
  }

  get posts() {
    return this._posts;
  }

  updateLS() {
    localStorage.setItem('posts', JSON.stringify(this._posts));
  }

  add(photoPosts) {
    const arr = [];
    photoPosts.forEach((element) => {
      const photoPost = PhotoPost.parse(element);
      if (this._posts.every(post => post.id !== photoPost.id)) {
        this._posts.push(photoPost);
        arr.push(photoPost);
      }
    });
    this.updateLS();
    return arr;
  }

  remove(id) {
    const index = this._posts.map(element => element.id).indexOf(id);
    if (~index) {
      this._posts.splice(index, 1);
      this.updateLS();
      return true;
    }
    return false;
  }

  clear() {
    this._posts = [];
    this.updateLS();
  }
}

/* global User, PhotoPost, DefaultFilter */

class FeedModel {
  constructor() {
    this._me = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('me'))));
    this._postsID = [];
    this._me.following.forEach((user) => {
      User.parse(JSON.parse(localStorage.getItem(user))).miniPosts.forEach((miniPost) => {
        this._postsID.push(miniPost.id);
      });
    });
    this._posts = JSON.parse(localStorage.getItem('posts')).map(post => PhotoPost.parse(post));
  }

  get posts() {
    return this._posts.filter(post => this._postsID.includes(post.id) || post.author === this._me.username);
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

  getPost(postID) {
    return this._posts.find(element => element.id === postID);
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

  like(postID) {
    this.getPost(postID).like(this._me.username);
    this.updateLS();
  }

  share(postID) {
    this.empty = null;
  }

  addComment(postID, text) {
    this.getPost(postID).comment(new Comment(this._me.username, text));
    this.updateLS();
  }
}

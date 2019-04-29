/* global User, PhotoPost */

function updateUser(user) {
  localStorage.setItem(user.username, JSON.stringify(user));
}

class ProfileModel {
  constructor() {
    this._user = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('targetUser'))));
    this._me = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('me'))));
    this._posts = JSON.parse(localStorage.getItem('posts')).map(element => PhotoPost.parse(element));
  }

  getPost(postID) {
    return this._posts.find(element => element.id === postID);
  }

  updateLS() {
    localStorage.setItem('posts', JSON.stringify(this._posts));
  }

  follow() {
    this._user.toggleFollower(this._me.username);
    this._me.toggleFollowing(this._user.username);
    updateUser(this._me);
    updateUser(this._user);
  }

  changeAva(image) {
    this._me.ava = image;
    updateUser(this._me);
  }

  changeStatus(status) {
    this._me.status = status;
    updateUser(this._me);
  }

  changeAccess() {
    this._me.togglePrivacy();
    updateUser(this._me);
  }

  like(postID) {
    this.getPost(postID).like(this._me.username);
    this.updateLS();
  }

  share(postID) {
    this.empte = null;
  }

  addComment(postID, text) {
    this.getPost(postID).comment(new Comment(this._me.username, text));
    this.updateLS();
  }

  getProfileFollowers() {
    return this._user.followers.length;
  }

  get user() {
    return this._user;
  }
}

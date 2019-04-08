/* global User */

function updateUser(user) {
  localStorage.setItem(user.username, JSON.stringify(user));
}

class ProfileModel {
  constructor() {
    this._user = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('targetUser'))));
    this._me = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('me'))));
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

  getProfileFollowers() {
    return this._user.followers.length;
  }

  get user() {
    return this._user;
  }
}

/* global ConvertorService, MiniPost */

class User {
  constructor(email, name, username, password, ava, miniPosts, following, followers, status, privacy) {
    this._email = email;
    this._name = name;
    this._username = username;
    this._password = password;
    this._ava = ava || './resources/images/defaultAva.svg';
    this._miniPosts = [];
    if (miniPosts) {
      miniPosts.forEach((object) => {
        this._miniPosts.push(MiniPost.parse(object));
      });
    }
    this._following = following || [];
    this._followers = followers || [];
    this._status = status || '';
    this._privacy = privacy || 'public';
  }

  get email() {
    return this._email;
  }

  get name() {
    return this._name;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get ava() {
    return this._ava;
  }

  get miniPosts() {
    return this._miniPosts;
  }

  get following() {
    return this._following;
  }

  get followers() {
    return this._followers;
  }

  get status() {
    return this._status;
  }

  get privacy() {
    return this._privacy;
  }

  set password(password) {
    this._password = password;
  }

  set ava(ava) {
    this._ava = ava;
  }

  set status(status) {
    this._status = status;
  }

  set privacy(privacy) {
    this._privacy = privacy;
  }

  isPublic() {
    return this._privacy === 'public';
  }

  isPrivate() {
    return !this.isPublic();
  }

  togglePrivacy() {
    if (this.isPublic()) {
      this._privacy = 'private';
    } else {
      this._privacy = 'public';
    }
  }

  isFollower(user) {
    return ~this._following.indexOf(user);
  }

  isFollowing(user) {
    return ~this._followers.indexOf(user);
  }

  toggleFollower(user) {
    const index = this._followers.indexOf(user);
    if (~index) {
      this._followers.splice(index, 1);
    } else {
      this._followers.push(user);
    }
  }

  toggleFollowing(user) {
    const index = this._following.indexOf(user);
    if (~index) {
      this._following.splice(index, 1);
    } else {
      this._following.push(user);
    }
  }

  static parse(object) {
    const user = new User(object._email,
      object._name,
      object._username,
      object._password,
      object._ava,
      object._miniPosts,
      object._following,
      object._followers,
      object._status,
      object._privacy);
    return user;
  }
}

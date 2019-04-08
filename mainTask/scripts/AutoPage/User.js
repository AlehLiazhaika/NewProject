class User {
  constructor(email, name, username, password, ava, posts, following, followers, status, privacy) {
    this._email = email;
    this._name = name;
    this._username = username;
    this._password = password;
    this._ava = `../mainTask/images/${username}/ava.png`;
    this._posts = posts || [];
    this._following = following || [];
    this._followers = followers || [];
    this._status = status || '';
    this._privacy = privacy || 'private';
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

  get posts() {
    return this._posts;
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

  set password(password) {
    this._password = password;
  }

  set ava(ava) {
    this._ava = ava;
  }

  set status(status) {
    this._status = status;
  }

  isPrivate() {
    return this._privacy === 'private';
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
      object._posts,
      object._following,
      object._followers,
      object._status,
      object._privacy);
    return user;
  }
}

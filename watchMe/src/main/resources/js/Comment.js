class Comment {
  constructor(user, text) {
    this._user = user;
    this._text = text;
  }

  get user() {
    return this._user;
  }

  get text() {
    return this._text;
  }

  static parse(object) {
    return new Comment(object._user, object._text);
  }
}

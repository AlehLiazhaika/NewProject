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

  getHTML() {
    const commentTemplate = document.getElementById('commentTemplate').content.querySelector('.comment');
    commentTemplate.querySelector('.userName').textContent = this._user;
    commentTemplate.querySelector('.commentText').textContent = this._text;
    return commentTemplate.cloneNode(true);
  }
}

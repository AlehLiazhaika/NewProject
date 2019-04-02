/* global likeFunc */

class PhotoPost {
  constructor(id, author, description, photoLink, hashTags, comments, likes, creationTime) {
    this._id = id;
    this._author = author;
    this._description = description;
    this._hashTags = hashTags || description.match(/#[a-z][A-Z][0-9]*/g) || [];
    this._comments = comments.map(element => Comment.parse(element)) || [];
    this._likes = likes || [];
    this._creationTime = creationTime || Date.now();
    this._photoLink = photoLink;
  }

  isLiked(username) {
    return this._likes.includes(username);
  }

  like(username) {
    if (this.isLiked(username)) {
      this._likes.splice(this._likes.indexOf(username), 1);
    } else {
      this._likes.push(username);
    }
  }

  comment(comment) {
    this._comments.push(comment);
  }

  get id() {
    return this._id;
  }

  get author() {
    return this._author;
  }

  get description() {
    return this._description;
  }

  get hashTags() {
    return this._hashTags;
  }

  get comments() {
    return this._comments;
  }

  get likes() {
    return this._likes;
  }

  get creationTime() {
    return this._creationTime;
  }

  get photoLink() {
    return this._photoLink;
  }

  set id(id) {
    this._id = id;
  }

  set author(author) {
    this._author = author;
  }

  set description(description) {
    this._description = description;
  }

  set hashTags(hashTags) {
    this._hashTags = hashTags;
  }

  set comments(comments) {
    this._comments = comments;
  }

  set likes(likes) {
    this._likes = likes;
  }

  set creationTime(creationTime) {
    this._creationTime = creationTime;
  }

  set photoLink(photoLink) {
    this._photoLink = photoLink;
  }

  static parse(object) {
    const post = new PhotoPost(object._id,
      object._author,
      object._description,
      object._photoLink,
      object._hashTags,
      object._comments,
      object._likes,
      object._creationTime);
    return post;
  }
}

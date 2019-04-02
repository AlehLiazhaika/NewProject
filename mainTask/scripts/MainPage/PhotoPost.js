/* global likeFunc */

class PhotoPost {
  constructor(id, author, description, photoLink, hashTags, comments, likes, creationTime) {
    this._id = id;
    this._author = author;
    this._description = description;
    this._hashTags = hashTags || description.match(/#[a-z][A-Z][0-9]*/g);
    this._comments = comments || [];
    this._likes = likes || [];
    this._creationTime = Date.parse(creationTime) || new Date(Date.now());
    this._photoLink = photoLink;
  }

  like(user) {
    this._likes.push(user);
  }

  disLike(user) {
    this._likes.remove(user);
  }

  comment(comment) {
    this.comment.push(comment);
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

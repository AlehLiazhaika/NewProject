/* global likeFunc */

class PhotoPost {
  constructor(id, author, description, photoLink) {
    this._id = id;
    this._author = author;
    this._description = description;
    this._hashTags = [];
    this._comments = [];
    this._likes = [];
    this._creationTime = new Date(Date.now());
    this._photoLink = photoLink;

    this._hashTags.push(description.match(/#[a-z][A-Z][0-9]*/g));
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
    const post = new PhotoPost(object._id, object._author, object._description, object._photoLink); // eslint-disable-line no-underscore-dangle
    post.hashTags = object._hashTags; // eslint-disable-line no-underscore-dangle
    post.comments = object._comments; // eslint-disable-line no-underscore-dangle
    post.likes = object._likes; // eslint-disable-line no-underscore-dangle
    post.creationTime = Date.parse(object._creationTime); // eslint-disable-line no-underscore-dangle
    return post;
  }
}

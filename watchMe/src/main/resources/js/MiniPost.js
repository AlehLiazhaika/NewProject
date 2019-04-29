/* global PhotoPost */

class MiniPost {
  constructor(id, image) {
    this._id = id;
    this._image = image;
  }

  get id() {
    return this._id;
  }

  get image() {
    return this._image;
  }

  static parse(object) {
    return new MiniPost(object._id, object._image);
  }
}

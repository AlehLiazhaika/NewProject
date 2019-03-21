/* global PhotoPost, DefaultFilter, PhotoPostView */

function getId(post) {
  return post.id;
}

class Feed {
  constructor() {
    this._posts = [];
  }

  get posts() {
    return this._posts;
  }

  add(photoPost) {
    if (PhotoPost.validate(photoPost) && this._posts.every(post => post.id !== photoPost.id)) {
      this._posts.push(photoPost);
      return true;
    }
    return false;
  }

  addAll(photoPosts) {
    photoPosts.array.forEach((element) => {
      this.add(element);
    });
  }

  remove(id) {
    const index = this._posts.map(getId).indexOf(id);
    if (~index) {
      this._posts.splice(index, 1);
      return true;
    }
    return false;
  }

  clear() {
    this._posts = [];
  }

  edit(id, photoPost) {
    const index = this._posts.map(getId).indexOf(id);
    if (PhotoPost.validate(photoPost) && ~index) {
      this._posts[index] = photoPost;
      return true;
    }
    return false;
  }

  getPostsById(id) {
    return this._posts.find(element => element.id === id);
  }

  getPosts(skip = 0, top = 10, filter = new DefaultFilter()) {
    return this._posts
      .filter(element => filter.check(element))
      .sort((o1, o2) => o1.creationTime.getTime() - o2.creationTime.getTime())
      .slice(skip, skip + top);
  }
}

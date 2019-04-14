/* global User, PhotoPost, MiniPost */

function updatePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function updateUser(user) {
  localStorage.setItem(user.username, JSON.stringify(user));
}

class PostEditorModel {
  constructor() {
    this._me = User.parse(JSON.parse(localStorage.getItem(localStorage.getItem('me'))));
  }

  publish(image, discription) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    let id = 0;
    if (posts.length !== 0) {
      id = posts[posts.length - 1]._id + 1;
    }
    const post = new PhotoPost(id, this._me.username, discription, image);
    this._me.miniPosts.push(new MiniPost(id, image));
    updateUser(this._me);
    posts.push(post);
    updatePosts(posts);
  }
}

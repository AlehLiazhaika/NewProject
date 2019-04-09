/* global PhotoPost, Feed, Header */

if (!localStorage.getItem('posts')) {
  localStorage.setItem('posts', JSON.stringify([]));
}

const header = new Header();
const feed = new Feed(document.getElementById('feed'));
feed.add(JSON.parse(localStorage.getItem('posts')));

// submit

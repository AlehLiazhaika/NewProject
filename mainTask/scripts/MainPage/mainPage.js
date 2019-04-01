/* global PhotoPost, Feed */

const feed = new Feed(document.getElementById('feed'));
feed.add(JSON.parse(localStorage.getItem('posts')));

// submit

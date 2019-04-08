/* global PhotoPost, Feed, Header */


const header = new Header();
const feed = new Feed(document.getElementById('feed'));
feed.add(JSON.parse(localStorage.getItem('posts')));

// submit
